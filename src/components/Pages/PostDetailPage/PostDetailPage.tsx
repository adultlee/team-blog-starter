import styled from "styled-components";
import Mdx from "../../Modules/Post/Mdx";
import Link from "next/link";
import Image from "next/image";
import {
	GetStaticPaths,
	InferGetStaticPropsType,
	GetStaticPropsContext,
} from "next";
import { allPosts } from "@/contentlayer/generated";

const PostBodyBox = styled.div`
	position: relative;
	margin-bottom: 200px;
	font-size: 16px;
	width: 100%;
	max-width: 1000px;

	* {
		margin-bottom: 10px;
	}

	a {
		font-weight: 600;
		color: #008378;
	}

	iframe {
		width: 100%;
	}

	strong {
		font-weight: 800;
	}

	em {
		color: #959595;
		font-style: italic;
	}

	pre {
		margin: 30px 0;
		padding: 10px;
		box-shadow: ${(props) => props.theme.color.shadow};
		-webkit-box-shadow: ${(props) => props.theme.color.shadow};
		-moz-box-shadow: ${(props) => props.theme.color.shadow};
		overflow: auto;
	}

	code.small-code {
		padding: 4px 6px 1px 6px;
		margin-right: 3px;
		border-radius: 6px;
		font-weight: 600;
	}

	img {
		width: 80%;
	}

	code span {
		margin-bottom: 2px;
		font-size: 1rem;
	}
`;

const ProfileWrapper = styled.div`
	width: 80vw;
	min-width: 380px;
	display: flex;
	border-bottom: 1px solid ${(props) => props.theme.color.primary};
	padding-bottom: 10px;
	margin-bottom: 30px;
	max-width: 800px;
`;

const ImageContainer = styled.div`
	min-width: 80px; // 원하는 너비로 설정
	width: 80px; // 원하는 너비로 설정
	height: 80px; // 원하는 높이로 설정
	border-radius: 50%;
	overflow: hidden; // 이미지가 컨테이너를 벗어나지 않도록
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

const ProfileInfoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProfileTitle = styled.div`
	font-size: 26px;
	display: flex;

	.author {
		margin-right: 20px;
		color: ${(props) => props.theme.color.primary};
	}
`;

const PostDate = styled.div`
	display: flex;
	font-size: 14px;
	color: #8b95a1;
`;

const PostTitle = styled.h1`
	width: 100%;
	font-size: 36px;
	color: ${(props) => props.theme.color.primary};
	margin-top: 20px;
	margin-bottom: 10px;
	max-width: 1000px;
`;

const PostDescription = styled.p`
	width: 100%;
	font-size: 20px;
	color: #8b95a1;
	margin-bottom: 10px;
	max-width: 1000px;
`;

const PostDetailPageWrapper = styled.div`
	width: 100%;
	max-width: 800px;
`;

const PostDetailPage = ({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	if (!post) return null; // 혹은 다른 대체 컴포넌트나 로딩 상태를 표시
	return (
		<PostDetailPageWrapper>
			<PostTitle>{post.title}</PostTitle>
			<PostDescription> {post.description}</PostDescription>
			<ProfileWrapper>
				<ImageContainer>
					<Image
						src={`/profile/${post.author}.png`}
						alt="Profile Picture"
						width={80}
						height={80}
					/>
				</ImageContainer>
				<ProfileInfoWrapper>
					<Link href={`/members/${post.author}`}>
						<ProfileTitle>
							<div className="author">{post.author}</div>{" "}
						</ProfileTitle>
					</Link>
					<PostDate>{post.publishedAt.slice(0, 10)}</PostDate>
				</ProfileInfoWrapper>
			</ProfileWrapper>

			<PostBodyBox>
				<Mdx code={post.body.code} />
			</PostBodyBox>
		</PostDetailPageWrapper>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const temp = {
		paths: allPosts.map(({ _raw }) => ({
			params: {
				slug: _raw.flattenedPath.split("/").join("_"),
			},
		})),

		fallback: false,
	};
	return temp;
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const postId = String(params?.slug || "");
	const post = allPosts.find(({ _raw }) => {
		return _raw.flattenedPath.split("/").join("_") === postId;
	});

	return {
		props: {
			post,
		},
	};
};

export default PostDetailPage;
