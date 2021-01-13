import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Loader from "../Loader";
import EditProfileForm from "./EditProfileForm";


const Wrapper = styled.div`
	padding-bottom: 5rem;

	.flex-wrapper {
		display: flex;
		justify-content: center;

		form {
			.cover-photo {
				margin-bottom: 1rem;
				cursor: pointer;
			}

			.avatar-input {
				margin-top: -100px;
				margin-left: 1rem;
				cursor: pointer;
			}

			div.bio-wrapper {
				background: ${props => props.theme.tertiaryColor2};
				margin-bottom: 1.4rem;
				border-bottom: 1px solid ${props => props.theme.accentColor};
				padding: 0.5rem;

				label {
					color: ${props => props.theme.secondaryColor};
					margin-bottom: 0.4rem;
				}

				textarea {
					font-size: 1rem;
					width: 100%;
					background: ${props => props.theme.tertiaryColor2};
					border: none;
					font-family: ${props => props.theme.font};
					color: ${props => props.theme.primaryColor};
				}
			}
		}
	}
	@media screen and (max-width: 760px) {
		.flex-wrapper {
			display: block;
		}
	}
`;

const EditProfile = () => {
	const data = {
		profile : {
		  id : 345,
		  coverPhoto : "https://pbs.twimg.com/profile_banners/1042345436051169285/1609892461/1500x500",
		  avatar : "https://pbs.twimg.com/profile_images/1346612692891664386/Vs5A1qzM_400x400.jpg",
		  bio : "Let the game begin",
		  location : "Adeliade",
		  website : "gun.eco",
		  isSelf : true,
		  dob : "28.06.2004",
		  isFollowing : true,
		  followersCount : 23,
		  followingCount : 4,
		  handle : "@jellysandwich",
		  fullname : "Jellymaster",
		  tweets : []
		}
	  };
	const loading = true;

	if (loading) return <Loader />;

	return (
		<Wrapper>
			<Header>Edit Profile</Header>
			<div className="flex-wrapper">
				<EditProfileForm profile={data && data.profile} />
			</div>
		</Wrapper>
	);
};

export default EditProfile;
