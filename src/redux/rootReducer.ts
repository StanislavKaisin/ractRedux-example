// rootReducer

import { combineReducers } from "redux";
import { alertReducer, appReducer } from "./appReducer";
import { fetchPostsReducer, postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  fetchedPosts: fetchPostsReducer,
  app: appReducer,
  alert: alertReducer,
});

// console.log(`rootReducer`, rootReducer);

// export interface IState {
//   state: typeof rootReducer;
// }

export type IState = ReturnType<typeof rootReducer>;
