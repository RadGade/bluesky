import React, { useState } from "react";

import Button from "../../styles/Button";
import { displayError } from "../../utils";


const Follow = ({ isFollowing, id, sm = false, relative = false }) => {
  const [followState, setFollowState] = useState(isFollowing);


  return (
    <Button outline sm={sm} relative={relative} >
    Following
    </Button>
  );
};

export default Follow;
