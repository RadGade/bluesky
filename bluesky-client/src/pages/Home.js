import React, {useEffect} from "react";
import styled from "styled-components";
import FeedList from "../components/FeedList";
import NewTweet from "../components/Tweet/NewTweet";
import Header from "../components/Header";
import db from "../blue/db";

const Wrapper = styled.div``;



const Home = () => {

	return (
		<Wrapper>
			<Header>
				<span>Home</span>
			</Header>
			<NewTweet />
			<FeedList />
		</Wrapper>
	);
};

export default Home;
