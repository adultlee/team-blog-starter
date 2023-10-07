import styled from "styled-components";
import ToggleTheme from "./ThemeToggle";
import GithubIcon from "@/components/Common/GithubIcon";
import meta from "@meta";
import { SideMenu } from "./SideMenu";

const HeaderWrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: fixed;
	z-index: 999;
	padding: 10px;
`;

const RightButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const DropdownWrapper = styled.div``;

const Header = () => {
	return (
		<HeaderWrapper>
			<DropdownWrapper>
				<SideMenu />
			</DropdownWrapper>
			<RightButtonsWrapper>
				<GithubIcon githubLink={meta.githubLink} />
				<ToggleTheme />
			</RightButtonsWrapper>
		</HeaderWrapper>
	);
};

export default Header;
