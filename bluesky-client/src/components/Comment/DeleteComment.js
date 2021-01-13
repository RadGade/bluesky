import React from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

import { TrashIcon } from "../Icons";

const DeleteComment = ({ id }) => {
  const { tweetId } = useParams();

  const handleDeleteComment = async () => {
    toast.success("Your comment has been deleted");
  };

  return <TrashIcon   />;
};

export default DeleteComment;
