import { IfetchedPost } from "../components/FetchedPosts";
import { CREATE_POST, FETCH_POSTS } from "./types";

export interface IPost {
  title: string;
  id: string;
}

export interface IPostState {
  posts: IPost[];
}

export interface IFetchedPostState {
  fetchedPosts: IfetchedPost[];
}

const initialPostsState: IPost[] = [];

const initialFetchedPostsState: IfetchedPost[] = [];

export interface IPostAction {
  type: typeof CREATE_POST;
  payload: IPost[];
}

export interface IFetchPostAction {
  type: typeof FETCH_POSTS;
  payload: IfetchedPost[];
}

export const postsReducer = (
  state = initialPostsState,
  action: IPostAction
) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, ...action.payload];
    // return { ...state, posts: [...state.posts, ...action.payload] };

    default:
      return state;
  }
};

export const fetchPostsReducer = (
  state = initialFetchedPostsState,
  action: IFetchPostAction
) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...state.concat(action.payload)];
    default:
      return state;
  }
};
