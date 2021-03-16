import React from "react";
import { useSelector } from "react-redux";
import { FetchedPosts } from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { IPostState } from "./redux/postsReducer";

function App() {
  const posts = useSelector((state: IPostState) => state.posts);
  return (
    <div className="container pt-3">
      <h1>React</h1>
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts posts={posts} />
        </div>
        <div className="col">
          <h2>Async posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
