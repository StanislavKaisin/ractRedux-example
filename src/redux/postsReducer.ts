import { CREATE_POST } from "./types";

export interface IPost {
  post: {
    title: string;
    id: string;
  };
}

export interface IPostState {
  posts: IPost[];
  fetchedPosts: IPost[];
}

const initialState: IPostState = {
  posts: [],
  fetchedPosts: [],
};

export interface IPostAction {
  type: typeof CREATE_POST;
  payload: IPost[];
}

export const postsReducer = (state = initialState, action: IPostAction) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat(action.payload) };
    // return { ...state, posts: [...state.posts, ...action.payload] };
    default:
      return state;
  }
};
