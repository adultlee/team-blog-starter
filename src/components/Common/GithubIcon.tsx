import { ImGithub } from "react-icons/im";
import styled from "styled-components";

interface GithubIconsProps {
	githubLink: string;
	altText?: string;
}

const IconWrapper = styled.div`
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;

const GithubIcon: React.FC<GithubIconsProps> = ({ githubLink = "#" }) => {
	return (
		<a href={githubLink} target="_blank" rel="noopener noreferrer">
			<IconWrapper>
				<ImGithub />
			</IconWrapper>
		</a>
	);
};

export default GithubIcon;
