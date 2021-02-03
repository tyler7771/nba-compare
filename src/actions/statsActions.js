export const getSeasonAverages = (searchString) => ({
  type: "GET_SEASON_AVERAGES",
  searchString,
});

export const removePlayerStats = (id) => ({
  type: "REMOVE_PLAYER_STAT",
  id,
});

export const clearLastTenStats = () => ({
  type: "CLEAR_LAST_TEN_STATS",
});

export const getLastTenGamesStats = (player) => ({
  type: "GET_LAST_TEN_STATS",
  player,
});
