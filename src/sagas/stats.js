import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchAverages({ searchString }) {
  const json = yield fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=2020${searchString}`
  ).then((response) => response.json());

  yield put({
    type: "RECIEVE_SEASON_AVERAGES",
    data: json.data,
  });
}

function* fetchLastTenStats({ player }) {
  let games = yield fetch(
    `https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=${player.id}&per_page=72`
  )
    .then((response) => response.json())
    .then((response) => response.data);

  games = orderGamesByDate(games);

  if (games.length > 10) {
    games = games.slice(games.length - 10);
  }

  yield put({
    type: "RECIEVE_LAST_TEN_STATS",
    lastTen: {
      player_id: player.id,
      games,
    },
  });
}

const orderGamesByDate = (games) => {
  return games.sort((a, b) => {
    return new Date(a.game.date) - new Date(b.game.date);
  });
};

function* actionWatcher() {
  yield takeLatest("GET_SEASON_AVERAGES", fetchAverages);
  yield takeEvery("GET_LAST_TEN_STATS", fetchLastTenStats);
}

export default actionWatcher;
