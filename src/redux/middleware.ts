import { showAlert } from "./actions";
import { IPostAction } from "./postsReducer";
import { CREATE_POST } from "./types";

const forbiddenWords = ["fuck", "spam", "Zelensky"];

export function forbiddenWordsMiddleware({ dispatch }: any) {
  return function (next: any) {
    return function (action: IPostAction) {
      if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter((word) =>
          action.payload[0].title.includes(word)
        );
        if (found.length) {
          return dispatch(showAlert("forbidden word has been found"));
        }
      }
      return next(action);
    };
  };
}
