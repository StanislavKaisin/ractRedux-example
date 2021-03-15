import React from "react";
import Post from "./Post";

interface IPostsProps {
  posts: number[];
}

export const Posts = ({ posts }: IPostsProps) => {
  if (!posts.length)
    return (
      <>
        <p className="text-center">No posts yet</p>
      </>
    );
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post} />
      ))}{" "}
    </>
  );
};
