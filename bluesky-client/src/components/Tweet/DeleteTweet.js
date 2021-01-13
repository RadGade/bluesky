import React from "react";

import { toast } from "react-toastify";

import { TrashIcon } from "../Icons";

const DeleteTweet = ({ id }) => {

const loading = false;
  const handleDeleteTweet = async () => {
    await console.log("overthinling");
    toast.success("Your tweet has been deleted");
  };

  return <TrashIcon loading={loading} />;
};

export default DeleteTweet;
