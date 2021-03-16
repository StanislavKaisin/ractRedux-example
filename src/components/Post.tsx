import React from "react";

export interface IPostProp {
  post: string;
}

const Post = ({ post }: IPostProp) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post}</h5>
      </div>
    </div>
  );
};

export default Post;
