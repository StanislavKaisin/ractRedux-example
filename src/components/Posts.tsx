import React from "react";
import { connect } from "react-redux";
import { IPost } from "../redux/postsReducer";
import Post from "./Post";

interface IPostsProps {
  posts: IPost[];
}

const Posts = ({ posts }: IPostsProps) => {
  if (!posts.length)
    return (
      <>
        <p className="text-center">No posts yet</p>
      </>
    );
  return (
    <>
      {posts.map((post) => (
        <Post post={JSON.stringify(post)} key={post.post.id} />
      ))}{" "}
    </>
  );
};

const mapStateToProps = (state: any) => {
  // console.log(`state=`, state);
  const posts = state.posts.posts;
  console.log(`posts=`, posts);
  return {
    posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
