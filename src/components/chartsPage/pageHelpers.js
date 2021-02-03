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

export const mapStatsLabel = (stat) => {
  switch (stat) {
    case "ast":
      return "Assists";
    case "blk":
      return "Blocks";
    case "dreb":
      return "Defensive Rebounds";
    case "fg3_pct":
      return "3 Point %";
    case "fg3a":
      return "3 Point Attempts";
    case "fg3m":
      return "3 Point Makes";
    case "fg_pct":
      return "Field Goal %";
    case "fga":
      return "Field Goal Attempts";
    case "fgm":
      return "Field Goal Makes";
    case "ft_pct":
      return "Free Throw %";
    case "fta":
      return "Free Throw Attempts";
    case "ftm":
      return "Free Throw Makes";
    case "oreb":
      return "Offensive Rebounds";
    case "pf":
      return "Personal Fouls";
    case "pts":
      return "Points";
    case "reb":
      return "Rebounds";
    case "stl":
      return "Steals";
    case "turnover":
      return "Turnovers";
    default:
      return stat;
  }
};

export const statsSelectDropdownArr = [
  "pts",
  "fg3_pct",
  "fg3a",
  "fg3m",
  "fg_pct",
  "fga",
  "fgm",
  "ft_pct",
  "fta",
  "ftm",
  "ast",
  "blk",
  "stl",
  "reb",
  "dreb",
  "oreb",
  "pf",
  "turnover",
];
