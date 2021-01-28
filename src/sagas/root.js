import PlayerActionWatcher from "./player";
import SearchActionWatcher from "./search";
import StatsActionWatcher from "./stats";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([SearchActionWatcher(), PlayerActionWatcher(), StatsActionWatcher()]);
}
