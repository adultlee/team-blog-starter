import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const StyledMenuItem = styled(motion.li)`
	list-style: none;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	margin: 0;
	padding: 0;
	margin-top: 10px;
`;

const TextPlaceholder = styled(motion.span)`
	width: 300px;
	font-size: 30px;
	flex: 1;
	display: inline-block; // pseudo-element를 위해 필요
	/* 	
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0; // 초기 너비는 0
		height: 2px;
		background-color: currentColor; // 현재 글자 색상 사용
		transition: all 0.3s;
	}

	&:hover::after {
		width: 100%; // 호버 시 너비를 100%로 변경
	} */
`;

const variants = {
	open: {
		y: 0,
		display: "block",
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		display: "none",
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = [
	"#FF008C",
	"#D309E1",
	"#9C1AFF",
	"#7700FF",
	"#4400FF",
	"#FF4500",
	"#FFD700",
	"#32CD32",
	"#1E90FF",
	"#C71585", // 추가된 색상들
];

export const MenuItem = ({ text, url, i, toggle }: any) => {
	const colorIndex = i % colors.length; // i를 colors 배열의 길이로 나눈 나머지를 사용
	const style = { color: ` ${colors[colorIndex]}` };

	return (
		<Link href={url}>
			<StyledMenuItem
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				onClick={toggle}
			>
				<TextPlaceholder style={style}>{text}</TextPlaceholder>
			</StyledMenuItem>
		</Link>
	);
};
