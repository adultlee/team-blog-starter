import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";
import meta from "@meta";

const StyledMenuUL = styled(motion.ul)`
	margin: 0;
	padding: 0;
	padding: 25px;
	position: absolute;
	top: 100px;
	width: 230px;
`;

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const getUrlDatas = () => {
	const data = [
		{
			text: "HOME",
			url: "/",
		},
		{
			text: "POST",
			url: "/post",
		},
	];

	meta.members.forEach((v) => {
		data.push({
			text: v.name,
			url: `/members/${v.name}`,
		});
	});

	return data;
};

export const Navigation = ({ toggle }: any) => {
	const datas = getUrlDatas();
	return (
		<StyledMenuUL variants={variants}>
			{datas.map((data, i) => (
				<MenuItem
					text={data.text}
					url={data.url}
					toggle={toggle}
					i={i}
					key={i}
				/>
			))}
		</StyledMenuUL>
	);
};
