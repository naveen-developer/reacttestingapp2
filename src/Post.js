import React from "react";

const Post = ({ values }) => {
  return (
    <div>
      <h2>{values.name}</h2>
      <img src={`/reacttestingapp2${values.image}`} width="100%" alt="image" />
    </div>
  );
};

export default Post;
