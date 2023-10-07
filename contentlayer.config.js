import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
	name: "Post",
	contentType: "mdx",
	filePathPattern: `**/*.mdx`,
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		author: {
			type: "string",
			required: true,
		},
		publishedAt: {
			type: "date",
			required: true,
		},
	},
	// ...computedFields
}));

const contentSource = makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [],
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
				},
			],
			highlight,
		],
	},
});

export default contentSource;
