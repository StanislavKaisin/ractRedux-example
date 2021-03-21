import { IAlertAction, IappAction } from "./appReducer";
import { IPost, IPostAction } from "./postsReducer";
import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function createPost(post: IPost[]): IPostAction {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch: any) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: FETCH_POSTS, payload: json });
        dispatch(hideLoader());
      }, 1000);
    } catch (error) {
      dispatch(showAlert("Something wrong with the server"));
      dispatch(hideLoader());
    }
  };
}

export function showLoader(): IappAction {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader(): IappAction {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text: string) {
  return (dispatch: any) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };

  // return {
  //   type: SHOW_ALERT,
  //   payload: text,
  // };
}

export function hideAlert(): IAlertAction {
  return {
    type: HIDE_ALERT,
  };
}
