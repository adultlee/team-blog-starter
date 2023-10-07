import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const PostCardWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	margin: 12px 0;
	width: 600px;
	background-color: ${(props) => props.theme.color.background};
	padding: 5px;

	@media (max-width: 700px) {
		width: 100%;
	}

	@media (max-width: 450px) {
		width: 370px;
	}

	position: relative;
	transition: 0.2s ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
		opacity: 0.6;
		transition: 0.2s ease;

		.post-image {
			transition: 0.3s ease;
		}
	}

	&::before,
	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: opacity 0.38s ease-in-out, transform 0.35s ease-in-out;
		content: "";
		opacity: 0;
		pointer-events: none;
	}

	&::before {
		transform: scale3d(0, 1, 1);
		transform-origin: left top;
		border-top: 3px solid ${(props) => props.theme.color.primary};
		border-bottom: 3px solid ${(props) => props.theme.color.primary};
	}

	&::after {
		transform: scale3d(1, 0, 1);
		transform-origin: right top;
		border-right: 3px solid ${(props) => props.theme.color.primary};
		border-left: 3px solid ${(props) => props.theme.color.primary};
	}

	&:hover,
	&:focus {
		&::before,
		&::after {
			transform: scale3d(1, 1, 1);
			opacity: 1;
		}
	}
`;

type PostCardProps = {
	title: string;
	description: string | undefined;
	slug: string;
	author: string | undefined;
	publishedAt: string;
};

type ImageType = {
	src: string;
};

const PostTitle = styled.div`
	display: inline-block;
	position: relative;
	font-size: 36px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${(props) => props.theme.color.primary};
	margin: 5px;
`;

const PostDescripption = styled.div`
	color: ${(props) => props.theme.color.primary};
	font-size: 18px;
	margin-top: 5px;
	line-height: 1.57;
	opacity: 0.5;
	width: auto;
	display: inline-block;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;
	line-height: 1.2;
	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	margin: 0px 5px;
`;

const PostFootterWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin: 15px 5px;
`;

const PostProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const PostProfileText = styled.div`
	color: ${(props) => props.theme.color.primary};
	font-size: 2rm;
`;

const PostDateText = styled.div`
	margin-right: 15px;
`;

const ImageContainer = styled.div`
	min-width: 30px; // 원하는 너비로 설정
	width: 30px; // 원하는 너비로 설정
	height: 30px; // 원하는 높이로 설정
	border-radius: 50%;
	overflow: hidden; // 이미지가 컨테이너를 벗어나지 않도록
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

const PostCard = ({
	title,
	description,
	slug,
	author,
	publishedAt,
}: PostCardProps) => {
	return (
		<Link href={`/posts/${slug}`}>
			<PostCardWrapper
				initial={{ x: -30, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				exit={{ x: 40, opacity: 0 }}
				transition={{ duration: 1 }}
			>
				<PostTitle className="post-title">{title}</PostTitle>
				<PostDescripption className="post-desc">{description}</PostDescripption>
				<PostFootterWrapper>
					<PostProfileWrapper>
						<ImageContainer>
							<Image
								src={`/profile/${author}.png`}
								alt="Profile Picture"
								width={30}
								height={30}
							/>
						</ImageContainer>
						<PostProfileText>{author}</PostProfileText>
					</PostProfileWrapper>
					<PostDateText>{publishedAt.slice(0, 10)}</PostDateText>
				</PostFootterWrapper>
			</PostCardWrapper>
		</Link>
	);
};

export default PostCard;
