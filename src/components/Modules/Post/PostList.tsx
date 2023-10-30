import styled from "styled-components";
import PostCard from "./PostCard";
import { ImFilesEmpty } from "react-icons/im";

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const EmptyLogoWrapper = styled.div`
	width: 100%;
	height: 500px;
	box-shadow: ${(props) => props.theme.color.shadow};
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 64px;
`;

const PostList = ({ posts }: any) => {
	if (posts.length > 0)
		return (
			<ListWrapper>
				{posts.map((post: any, index: number) => (
					<PostCard
						key={post.title + index}
						title={post.title}
						description={post.description}
						slug={post._raw.flattenedPath.split("/").join("_")}
						author={post.author}
						publishedAt={post.publishedAt}
					/>
				))}
			</ListWrapper>
		);
	else
		return (
			<EmptyLogoWrapper>
				<ImFilesEmpty />
			</EmptyLogoWrapper>
		);
};

export default PostList;
