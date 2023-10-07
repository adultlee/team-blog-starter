import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styled from "styled-components";

const SideMenuNav = styled(motion.nav)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 250px;
`;

const SideBarBackground = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 250px;
	background: ${({ theme }) => theme.color.background};
	height: 100vh;
	box-shadow: ${({ theme }) => theme.color.shadow};
`;

const SideBarNavBackground = styled(motion.div)<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 250px;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	z-index: 998;
	backdrop-filter: blur(5px);
`;

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const SideMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	return (
		<SideMenuNav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			ref={containerRef}
		>
			<SideBarBackground className="background" variants={sidebar} />
			<Navigation toggle={() => toggleOpen()} />
			<MenuToggle toggle={() => toggleOpen()} />
			<SideBarNavBackground isOpen={isOpen} onClick={() => toggleOpen()} />
		</SideMenuNav>
	);
};
