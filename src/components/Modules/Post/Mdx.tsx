import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledH1 = styled(motion.h1)`
	color: ${(props) => props.theme.color.primary};
	font-size: 36px;
`;
const FramerH1: React.FC = ({ children }: any) => (
	<StyledH1
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledH1>
);

const StyledH2 = styled(motion.h2)`
	font-size: 32px;
	color: ${(props) => props.theme.color.primary};
`;
const FramerH2: React.FC = ({ children }: any) => (
	<StyledH2
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledH2>
);

const StyledH3 = styled(motion.h3)`
	font-size: 28px;
	color: ${(props) => props.theme.color.primary};
`;
const FramerH3: React.FC = ({ children }: any) => (
	<StyledH3
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledH3>
);

const StyledH4 = styled(motion.h4)`
	font-size: 24px;
	color: ${(props) => props.theme.color.primary};
`;
const FramerH4: React.FC = ({ children }: any) => (
	<StyledH4
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledH4>
);

const StyledP = styled(motion.p)`
	margin-bottom: 20px;

	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
`;

const FramerP: React.FC = ({ children }: any) => (
	<StyledP
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledP>
);

const StyledBlockquote = styled(motion.blockquote)`
	position: relative;
	overflow: hidden;
	padding: 30px 30px;
	color: ${(props) => props.theme.color.textColor};
	font-weight: 300;
	opacity: 0.7;
	transition: all 0.5s;
	box-shadow: ${(props) => props.theme.color.shadow};
	-webkit-box-shadow: ${(props) => props.theme.color.shadow};
	-moz-box-shadow: ${(props) => props.theme.color.shadow};
	border-radius: 16px;
	::before {
		content: "";
		display: block;
		width: 10px;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-color: ${(props) => props.theme.color.secondary};
	}

	a {
		color: #00baaa;
	}

	p {
		margin-bottom: 0;
		color: ${(props) => props.theme.color.textColor};
	}
`;
const FramerBlockquote: React.FC = ({ children }: any) => (
	<StyledBlockquote
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledBlockquote>
);

const StyledLi = styled(motion.li)`
	margin-left: 20px;
	margin-top: 5px;
	margin-bottom: 5px;
`;
const FramerLi: React.FC = ({ children }: any) => (
	<StyledLi
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledLi>
);

const StyledPre = styled(motion.pre)`
	background-color: black;
	border-radius: 16px;
`;
const FramerPre: React.FC = ({ children }: any) => (
	<StyledPre
		initial={{ x: -10, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</StyledPre>
);

const components = {
	Image,
	h1: FramerH1,
	h2: FramerH2,
	h3: FramerH3,
	h4: FramerH4,
	p: FramerP,
	blockquote: FramerBlockquote,
	li: FramerLi,
	pre: FramerPre,
};

interface MdxProps {
	code: string;
}

const Mdx = ({ code }: MdxProps) => {
	const Component = useMDXComponent(code);

	return <Component components={components} />;
};

export default Mdx;
