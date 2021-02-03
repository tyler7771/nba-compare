import { put, takeLatest } from "redux-saga/effects";

function* fetchPlayer({ id }) {
  const json = yield fetch(
    `https://www.balldontlie.io/api/v1/players/${id}`
  ).then((response) => response.json());

  yield put({
    type: "RECIEVE_PLAYER",
    json: json,
  });

  yield put({
    type: "CLEAR_SEARCH",
  });
}

function* actionWatcher() {
  yield takeLatest("GET_PLAYER", fetchPlayer);
}

export default actionWatcher;
