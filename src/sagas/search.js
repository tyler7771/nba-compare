import { put, takeLatest } from "redux-saga/effects";

function* fetchPlayers({ value, paginationCount }) {
  const json =
    value === ""
      ? { data: undefined }
      : yield fetch(
          `https://www.balldontlie.io/api/v1/players?per_page=${paginationCount}&search=${value}`
        ).then((response) => response.json());

  yield put({
    type: "RECIEVE_PLAYERS",
    json: json.data,
  });
}

function* actionWatcher() {
  yield takeLatest("GET_PLAYERS", fetchPlayers);
}

export default actionWatcher;
