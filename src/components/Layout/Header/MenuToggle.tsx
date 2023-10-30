import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const MenuButton = styled(motion.div)`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	top: 18px;
	left: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${({ theme }) => theme.color.shadow};
`;

const MotionPath = styled(motion.path)`
	stroke: ${({ theme }) => theme.color.primary};
`;

const MenuSvg = styled.svg`
	align-items: center;
	display: flex;
	justify-content: center;
`;

const Path = (props: any) => (
	<MotionPath
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuToggle = ({ toggle }: any) => (
	<MenuButton onClick={toggle}>
		<MenuSvg width="20" height="20" viewBox="0 0 20 20">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</MenuSvg>
	</MenuButton>
);
