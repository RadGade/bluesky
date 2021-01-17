import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./styles/Layout";

import Nav from "./components/layout/Nav";
import Home from "./pages/Home";
import MasterTweet from "./components/Tweet/MasterTweet";
import Profile from "./components/Profile/Profile";
import Bookmarks from "./pages/Bookmarks";
import Notifications from "./pages/Notifications";
import Explore from "./pages/Explore";
import Suggestion from "./pages/Suggestion";
import EditProfile from "./components/Profile/EditProfile";

const AppRouter = () => {
  return (
    <HashRouter>
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
         
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route
            exact
            path={`/:handle/status/:tweetId`}
            component={MasterTweet}
          />
          <Route exact path={`/settings/profile`} component={EditProfile} />
          <Route exact path={`/:handle`} component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        <Suggestion />
      </Layout>
    </HashRouter>
  );
};

export default AppRouter;
