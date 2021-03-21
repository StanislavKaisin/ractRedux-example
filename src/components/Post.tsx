import React from "react";
import { IPost } from "../redux/postsReducer";
import { IfetchedPost } from "./FetchedPosts";

export interface IPostProp {
  post: {
    title: string;
    id: number | string;
  };
}

const Post = ({ post }: IPostProp) => {
  console.log(`post`, post);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  );
};

export default Post;
