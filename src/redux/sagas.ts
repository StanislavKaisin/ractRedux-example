import { call, put, takeEvery } from "redux-saga/effects";
import { IfetchedPost } from "../components/FetchedPosts";
import { hideAlert, hideLoader, showLoader } from "./actions";

import { IFetchPostAction } from "./postsReducer";
import { FETCH_POSTS, REQUEST_POSTS, SHOW_ALERT } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload: IfetchedPost[] = yield call(fetchPosts);
    yield put<IFetchPostAction>({ type: FETCH_POSTS, payload: payload });
    yield put(hideLoader());
  } catch (error) {
    yield put({ type: SHOW_ALERT, payload: "Something wrong with the server" });
    yield delay(2000);
    yield put(hideLoader());
    yield put(hideAlert());
  }
}

async function fetchPosts() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const json = await response.json();
  return json;
}
