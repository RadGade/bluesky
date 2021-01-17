import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import ProfileInfo from "./ProfileInfo";
import Tweet from "../Tweet/Tweet";
import Loader from "../Loader";
import db from "../../blue/db";


const Wrapper = styled.div`
	padding-bottom: 5rem;

  .profile-top {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    span.tweetsCount {
      margin-top: 0.1rem;
      color: ${(props) => props.theme.secondaryColor};
      font-size: 0.9rem;
    }
  }
`;

const Profile = () => {
  const { handle } = useParams();
  console.log(handle)
  db.user(handle).get("bio").once(console.log)

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
      tweets : [],
      tweetsCount : 0
		}
	  };
  // if (loading) return <Loader />;

  return (
    <Wrapper>
      <Header>
        <div className="profile-top">
          <span>{data && data.profile && data.profile.fullname}</span>
          <span className="tweetsCount">
            {data && data.profile && data.profile.tweetsCount
              ? `${data.profile.tweetsCount} Tweets`
              : "No Tweets"}
          </span>
        </div>
      </Header>
      <ProfileInfo profile={data && data.profile} />
      {data && data.profile && data.profile.tweets && data.profile.tweets.length
        ? data.profile.tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))
        : null}
    </Wrapper>
  );
};

export default Profile;
