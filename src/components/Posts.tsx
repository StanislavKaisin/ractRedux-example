import React from "react";
import { connect } from "react-redux";
import { IPost, IPostState } from "../redux/postsReducer";
import Post from "./Post";

interface IPostsProps {
  posts: IPost[];
}

const Posts = ({ posts }: IPostsProps) => {
  console.log(`posts`, posts);
  if (!posts.length)
    return (
      <>
        <p className="text-center">No posts yet</p>
      </>
    );
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}{" "}
    </>
  );
};

const mapStateToProps = (state: IPostState) => {
  // console.log(`state=`, state);
  const posts = state.posts;
  console.log(`posts in mapStateToProps=`, posts);
  return {
    posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
