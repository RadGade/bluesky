import React, { useEffect, useState } from "react";
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
  const [isSelf, setIsSelf] = useState(false);
  const [ackData, setAckData] = useState({});
  const [avatar, setAvatar] = useState("");


  useEffect(() => {
    const selfPub = window.sessionStorage.getItem("user");
    if(handle == selfPub) {
      setIsSelf(true);
      console.log("its me")
    } else {
      console.log("this ain't you");
    };

    db.user(handle)
    .get('Bio')
    .on((ack) => {
      setAckData(ack);
      console.log(ack)
    });
  
  })

	const data = {
		profile : {
		  id : ackData.pub,
		  coverPhoto : ackData.coverPhoto,
		  avatar : ackData.avatar,
		  bio : ackData.bio,
		  location : ackData.location,
		  website : ackData.website,
		  isSelf : isSelf,
		  dob : ackData.dob,
		  isFollowing : true,
		  followersCount : ackData.followersCount,
		  followingCount : ackData.followingCount,
		  handle : ackData.handle,
		  fullname : `${ackData.firstname} ${ackData.lastname}`,
      tweets : [],
      tweetsCount : ackData.tweetsCount
		}
	  };
    if (data.profile.id == undefined) return <Loader />;


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
