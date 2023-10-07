import { allPosts } from "@/contentlayer/generated";

type Props = {
	author?: string;
};

const usePosts = ({ author }: Props) => {
	const basePosts = allPosts.sort((prev, next) => {
		return Date.parse(next.publishedAt) - Date.parse(prev.publishedAt);
	});

	const filterPosts = !author
		? basePosts
		: basePosts.filter((post) => {
				return post.author === author;
		  });

	return {
		allPosts: basePosts,
		filterPosts,
	};
};

export default usePosts;
