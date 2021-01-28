import { put, takeLatest } from "redux-saga/effects";

function* fetchAverages({ searchString }) {
  const json = yield fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=2020${searchString}`
  ).then((response) => response.json());

  yield put({
    type: "RECIEVE_SEASON_AVERAGES",
    data: json.data,
  });
}

function* actionWatcher() {
  yield takeLatest("GET_SEASON_AVERAGES", fetchAverages);
}

export default actionWatcher;
