import styled from "styled-components";
import Link from "next/link";

const Section = styled.section`
	margin-top: 300px;
	margin-bottom: 50px;
	max-height: 300px;
	width: 100vw;
	background-color: ${(props) => props.theme.body};
	position: relative;
	color: ${(props) => props.theme.text};

	display: flex;
	flex-direction: column;
`;

const Bottom = styled.div`
	width: 75%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid ${(props) => props.theme.text};
	a {
		text-decoration: underline;
	}
	@media (max-width: 48em) {
		flex-direction: column;
		width: 100%;

		span {
			margin-bottom: 1rem;
		}
	}
`;

const Footer = () => {
	return (
		<Section>
			<Bottom>
				<span>
					&copy; {new Date().getFullYear()} Adultlee. All rights reserved.
				</span>
				<span>
					Made with &#10084; by{" "}
					<Link
						href="https://github.com/adultlee"
						target="_blank"
						rel="dofollow noreferrer"
					>
						이성인
					</Link>
				</span>
			</Bottom>
		</Section>
	);
};

export default Footer;
