import React, { useState } from "react";

import { HeartIcon, HeartFillIcon } from "../Icons";


const LikeTweet = ({ id, isLiked, likesCount }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleToggleLike = () => {

  };

  return (
    <span>
      {liked ? (
        <HeartFillIcon color="#E0245E"  />
      ) : (
        <HeartIcon  />
      )}
      {/* {likesCountState ? likesCountState : null} */}
    </span>
  );
};

export default LikeTweet;
