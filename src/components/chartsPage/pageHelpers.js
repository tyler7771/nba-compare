export const generateSearchString = (players) => {
  let str = "";

  players.forEach((player) => {
    str += `&player_ids[]=${player.id}`;
  });

  return str;
};

export const getStats = (id, seasonAverages) => {
  let stats = null;
  seasonAverages.forEach((statsObj) => {
    if (statsObj.player_id === id) {
      stats = statsObj;
    }
  });

  return stats;
};
