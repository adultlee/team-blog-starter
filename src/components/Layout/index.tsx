import { ReactNode, useEffect } from "react";
import Header from "@/components/Layout/Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";
type LayoutProps = {
	children: ReactNode;
};

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	min-height: 100vh;
	color: ${(props) => props.theme.color.textColor};
	background-color: ${(props) => props.theme.color.background};
	transition: all 0.5s;
	a {
		color: ${(props) => props.theme.color.secondary};
	}
`;

const Main = styled(motion.div)`
	align-items: center;
	width: 80vw;
	min-width: 380px;
	max-width: 1200px;
	display: flex;
	flex-flow: column;
	position: relative;
	z-index: 0;
	padding-top: 50px;
	color: ${(props) => props.theme.color.textColor};
`;

const variants = {
	hidden: { opacity: 0, x: -70, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -70 },
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<Body>
			<Header />
			<Main
				key={Math.random()}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ type: "keyframes" }}
			>
				{children}
			</Main>
			<Footer />
		</Body>
	);
};

export default Layout;
