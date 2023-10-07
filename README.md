<h1 align="center">
    Team-Blog-Starter
</h1>

<h4 align="center">
  "The project is a team blog template based on Next.js."
</h4>

## 🧐 About Team-Blog-starter

Team-Blog-starter is a template based on Next.js for writing tech blogs.

Markdown, Code Highlighting in various programming languages, and Katex syntax are supported. Additionally, you can easily add team members and use it.

Start your Team Blog with "Team-Blog-starter"

This project inspired by [zoomkoding-gatsby-blog](<[https://velog.io](https://github.com/zoomkoding/zoomkoding-gatsby-blog)>),

## [Live Demo](https://team-blog-starter.vercel.app/)

## Stack

- Next.js
- contentLayer
- styled-components
- framer-motion
- redux

## Features

- Markdown
- Code Highlighting
- Katex Syntax
- Dark Mode (Responsive to the settings of the OS)
- Member DetailPage
- Smooth UI using Framer Motion
- Responsive Web

Getting started your blog with Team-Blog-Starter by following steps below. It's very easy 😉.

## 1. Clone Project

> Make sure you have **node.js** installed on your computer.

```
$ git clone https://github.com/adultlee/team-blog-starter.git
```

## 2. Start dev server

```
$ cd my-team-blog
$ pnpm i
$ pnpm run dev
```

## 3. Write meta-config.js

```javascript
module.exports = {
	teamName: "TemaName", // write your Team Name.
	// write your Team Description.
	teamDescription:
		"TeamBlog에 대한 설명입니다. \n 여기에는 현재 팀이 진행할 설명에 대해서 기술되어있습니다.",
	githubLink: "https://github.com/adultlee", // write your github link.
	members: [
		// write your Members Data.
		{
			name: "member1",
			description: "member1에 대한 한줄 소개",
			githubLink: "https://github.com/adultlee",
		},
		{
			name: "member2",
			description: "member2에 대한 한줄 소개",
			githubLink: "https://github.com/adultlee",
		},
		{
			name: "member3",
			description: "member3에 대한 한줄 소개",
			githubLink: "https://github.com/adultlee",
		},
		{
			name: "member4",
			description: "member4에 대한 한줄 소개",
			githubLink: "https://github.com/adultlee",
		},
		// { // 추가적인 인원에 대한 정보를 작성합니다.
		//   name: 'member1',
		//   description: 'member1에 대한 한줄 소개',
		//   githubLink: 'https://github.com/adultlee',
		// },
	],
};
```

team-blog-starter provides a configuration file called `meta-config.js`. In this root

Configure `meta-config.js` to suit your blog.

## 4. Add your content

Markdown content is in `./posts`. You can write and add your articles.

## 5. Cutomize

### Project Structure

You can customize your own gatsby-starter-hoodie by referring to the following file structure 🙊.

```
├── node_modules
├── posts
│   └── member1 // members articles are here
│   └── member2
│   └── member3
├── public
└── src
    ├── assets
    ├── components
    │   └── Common
    │   └── Layout
    │   └── Modules
    │   └── Pages
    │   └── Providers
    │   ...
    ├── constants
    ├── hooks
    ├── enums
    ├── libs
    ├── pages // page components are here
    ├── stores
    ├── styles
    ├── types
    └── utils
```
