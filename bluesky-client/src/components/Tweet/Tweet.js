import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import DeleteTweet from "./DeleteTweet";
import LikeTweet from "./LikeTweet";
import Retweet from "./Retweet";
import { CommentIcon } from "../Icons";
import Avatar from "../../styles/Avatar";
import TweetFile from "../../styles/TweetFile";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.tertiaryColor};
  padding: 1.5rem 1rem 1rem 1rem;

  .tweet-info-user {
    display: flex;
  }

  .tweet-info-user span.username {
    font-weight: 500;
  }

  .tweet-info-user span.secondary {
    padding-left: 0.5rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .tags {
    display: flex;
  }

  span.tag {
    color: ${(props) => props.theme.accentColor};
    margin-right: 0.4rem;
  }

  div.tweet-stats {
    display: flex;
    margin-top: 0.5rem;
    align-items: center;

    div {
      margin-right: 4rem;
      color: ${(props) => props.theme.secondaryColor};
    }

    svg {
      margin-right: 0.5rem;
    }

    span {
      display: flex;
      align-items: center;
    }

    span.comment {
      svg {
        position: relative;
        top: 4px;
      }
    }
  }

  @media screen and (max-width: 470px) {
    div.tweet-stats {
      div {
        margin-right: 2.5rem;
      }
    }
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;

    .username {
      display: none;
    }

    .avatar {
      display: none;
    }

    .tweet-info-user span.secondary {
      padding-left: 0;
      padding-right: 0.7rem;
    }
  }
`;

const Tweet = ({ tweet }) => {
  const {
    id,
    text,
    tags,
    user,
    files,
    isTweetMine,
    isLiked,
    likesCount,
    isRetweet,
    retweetsCount,
    commentsCount,
    createdAt,
  } = tweet;

  // const strList = text.split(" ");
  // const processedText = strList.filter((str) => !str.startsWith("#")).join(" ");
  // const handle = user && user.handle;

  return (
    <Wrapper>
      <Link to={`/jelly`}>
        <Avatar className="avatar" src="https://pbs.twimg.com/profile_images/1346612692891664386/Vs5A1qzM_400x400.jpg" alt="avatar" />
      </Link>

      <div className="tweet-info">
        <div className="tweet-info-user">
          <Link to={`/jelly`}>
            <span className="username">Jellymaster</span>
            <span className="secondary">{`@jellysandwich`}</span>
            <span className="secondary">23.06.1999</span>
          </Link>
        </div>

        <Link to={`/jelly/status/56`}>
          <p>its dem aliens</p>
        </Link>
{/* 
        <div className="tags">
          {tags.length
            ? tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))
            : null}
        </div> */}

        {/* <Link to={`/${handle}/status/${id}`}>
          {files && files.length && files[0] ? (
            <TweetFile src={files[0].url} alt="tweet-file" />
          ) : null}
        </Link> */}

        <div className="tweet-stats">
          <div>
            <span className="comment">
              <Link to={`/jelly/status/${id}`}>
                <CommentIcon />
                45
              </Link>
            </span>
          </div>

          <div>
            <Retweet
              id={45}
              isRetweet={true}
              retweetsCount={69}
            />
          </div>

          <div>
            <LikeTweet id={56} isLiked={true} likesCount={420} />
          </div>

          {/* <div>
            <span>{isTweetMine ? <DeleteTweet id={id} /> : null}</span>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Tweet;
