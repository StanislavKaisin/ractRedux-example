import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { IFetchedPostState } from "../redux/postsReducer";
import { IState } from "../redux/rootReducer";
import { Loader } from "./Loader";

import Post from "./Post";

export interface IfetchedPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IFetchedPostsProps {
  posts: IfetchedPost | undefined;
}

export const FetchedPosts = () => {
  const state = useSelector((state: IFetchedPostState) => state.fetchedPosts);
  const stateLoading = useSelector((state: IState) => state.app.loading);
  console.log(`state`, state);
  console.log(`stateLoading`, stateLoading);
  const dispatch = useDispatch();
  if (stateLoading) {
    return <Loader />;
  }
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Load posts
      </button>

      {state.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};
