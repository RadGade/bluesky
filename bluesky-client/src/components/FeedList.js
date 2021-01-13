import React from "react";
import styled from "styled-components";

import Loader from "./Loader";
import Tweet from "./Tweet/Tweet";
import CustomResponse from "./CustomResponse";

const Wrapper = styled.div`
  margin-bottom: 7rem;
`;

const FeedList = () => {
  // const { data, loading } = useQuery(FEED);


  // if (loading) return <Loader />;

	// logout the user if removed from db
	// if(data === undefined) {
	// 	localStorage.clear();
	// 	client.writeData({
	// 		data: {
	// 			isLoggedIn: false
	// 		}
	// 	});
  // }
  

  return (
    <Wrapper>
      {/* { {data?.feed?.length ? (
        data.feed.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      ) : ( */}
        <Tweet key={45} tweet={{}} />
      {/* )}} */}
    </Wrapper>
  );
};

export default FeedList;
