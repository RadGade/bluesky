import React, { useState } from "react";

import { toast } from "react-toastify";
import { RetweetIcon, RtFillIcon } from "../Icons";

import { displayError } from "../../utils";

const Retweet = ({ id, isRetweet, retweetsCount }) => {
  const [retweet, setRetweet] = useState(isRetweet);
  const [retweetsCountState, setRetweetsCount] = useState(retweetsCount);
  // const [toggleRetweetMutation, { loading }] = useMutation(TOGGLE_RETWEET, {
  //   variables: { id },
  // });



  return (
    <span>
      {retweet ? (
        <RtFillIcon color="#17BF63" />
      ) : (
        <RetweetIcon />
      )}
      {retweetsCountState ? retweetsCountState : null}
    </span>
  );
};

export default Retweet;
