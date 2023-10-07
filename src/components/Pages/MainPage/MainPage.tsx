import type { NextPage } from "next";
import styled from "styled-components";
import Carousel from "../../Modules/Main/Carousel";
import meta from "@meta";

const IntroWrapper = styled.div`
	width: 100%;
	margin: 70px auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 70em) {
		width: 85%;
	}

	@media (max-width: 64em) {
		width: 100%;
		flex-direction: column;
	}
`;

const IntroLeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	margin-bottom: 50px;
`;

const IntroTitle = styled.h1`
	font-size: 60px;
	align-self: flex-start;
	width: 80%;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.color.primary};
`;
const IntroDescription = styled.p`
	max-width: 420px;
	color: ${({ theme }) => theme.color.primary};
`;

export const MainPage: NextPage = () => {
	return (
		<IntroWrapper>
			<IntroLeftWrapper>
				<IntroTitle>{meta.teamName}</IntroTitle>
				<IntroDescription>{meta.teamDescription}</IntroDescription>
			</IntroLeftWrapper>
			<Carousel />
		</IntroWrapper>
	);
};
