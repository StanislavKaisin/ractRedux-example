import { IPost, IPostAction } from "./postsReducer";
import { CREATE_POST } from "./types";

export function createPost(post: IPost[]): IPostAction {
  return {
    type: CREATE_POST,
    payload: post,
  };
}
