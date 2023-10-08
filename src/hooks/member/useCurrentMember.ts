import { useRouter } from "next/router";
import { allPosts, Post } from "@/contentlayer/generated";
import meta from "@meta";

export default function useCurrentMember(): [
	{ name: string; description: string; githubLink: string },
	Post[]
] {
	const router = useRouter();
	const curPathMember = router.asPath.slice(1).split("/")[1];
	const posts = [];

	let profile = {
		name: "adultlee",
		description: "해당 프로필이 발생했다면, profile에 문제가 발생한것입니다.",
		githubLink: "",
	};
	for (let i = 0; i < allPosts.length; i++) {
		if (allPosts[i].author === curPathMember) {
			posts.push(allPosts[i]);
		}
	}

	for (let i = 0; i < meta.members.length; i++) {
		if (meta.members[i].name === curPathMember) {
			profile = meta.members[i];
			break;
		}
	}

	return [profile, posts];
}
