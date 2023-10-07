import type { NextPage } from "next";
import styled from "styled-components";
import PostList from "@/components/Modules/Post/PostList";
import Image from "next/image";
import useCurrentMember from "@/hooks/member/useCurrentMember";
import GithubIcon from "@/components/Common/GithubIcon";
const Wrapper = styled.div`
	width: 100%;
	margin: 70px auto;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	@media (max-width: 70em) {
		width: 85%;
	}

	@media (max-width: 64em) {
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
`;

const ProfileCardWrapper = styled.div`
	width: 400px;
	min-width: 350px;
	min-height: 600px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	transition: 0.5s ease;
	border-radius: 30px;
	padding-top: 10px;
	box-shadow: ${(props) => props.theme.color.shadow};
	margin-bottom: 30px;
	&:hover {
		transform: scale(1.05);
	}

	.icon {
		margin: 10px;
	}
`;

const ProfileImage = styled(Image)`
	margin-top: 10px;
	margin-bottom: 20px;
`;

const Name = styled.div`
	font-size: 32px;
	padding: 5px;
`;

const Description = styled.div`
	font-size: 16px;
	margin-bottom: 20px;
	padding: 5px;
`;

const ListWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;

	width: 600px;

	@media (max-width: 700px) {
		width: 100%;
	}

	@media (max-width: 450px) {
		width: 370px;
	}
`;

const ListHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 10px;
	font-size: 32px;
	color: ${({ theme }) => theme.color.secondary};
`;

const MemberDetailPage: NextPage = () => {
	const [profile, posts] = useCurrentMember();

	return (
		<>
			<Wrapper>
				<ProfileCardWrapper>
					<ProfileImage
						width={400}
						height={400}
						src={`/profile/${profile.name}.png`}
						alt="The Weirdos"
					/>
					<Name>{profile.name}</Name>
					<Description>{profile.description}</Description>
					<div className="icon">
						<GithubIcon githubLink={profile.githubLink} />
					</div>
				</ProfileCardWrapper>
				<ListWrapper>
					<ListHeader>
						<span>Posts</span>
						<span>{posts.length}개</span>
					</ListHeader>
					<PostList posts={posts} />
				</ListWrapper>
			</Wrapper>
		</>
	);
};

export default MemberDetailPage;
