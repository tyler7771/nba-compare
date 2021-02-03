export const getSeasonAverages = (searchString) => ({
  type: "GET_SEASON_AVERAGES",
  searchString,
});

export const removePlayerStats = (id) => ({
  type: "REMOVE_PLAYER_STAT",
  id,
});
