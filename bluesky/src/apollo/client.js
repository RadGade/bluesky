import ApolloClient, { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

const client = new ApolloClient({
	cache,
	uri:"https://twitterclone22.herokuapp.com/",
	request: operation => {
		const token = localStorage.getItem("token");
		operation.setContext({
			headers: {
				Authorization: token ? token : ""
			}
		});
	}
});

cache.writeData({
	data: {
		isLoggedIn: !!localStorage.getItem("token"),
		user: localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null
	}
});

export default client;
