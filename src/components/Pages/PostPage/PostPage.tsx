import { NextPage } from "next";
import usePosts from "@/hooks/post/usePosts";
import styled from "styled-components";
import PostList from "@/components/Modules/Post/PostList";

const ListWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;

	width: 600px;

	@media (max-width: 700px) {
		width: 100%;
	}

	@media (max-width: 450px) {
		width: 370px;
	}
`;

const ListHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 10px;
	font-size: 32px;
	color: ${({ theme }) => theme.color.secondary};
`;

const PostPage: NextPage = () => {
	const { allPosts } = usePosts({});

	return (
		<ListWrapper>
			<ListHeader>
				<span>All Posts</span>
				<span>{allPosts.length}개</span>
			</ListHeader>
			<PostList posts={allPosts} />
		</ListWrapper>
	);
};

export default PostPage;
