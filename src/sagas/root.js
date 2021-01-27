import PlayerActionWatcher from "./player";
import SearchActionWatcher from "./search";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([SearchActionWatcher(), PlayerActionWatcher()]);
}
