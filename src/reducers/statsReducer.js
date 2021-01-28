const StatsReducer = (state = {}, action) => {
  let newData;

  switch (action.type) {
    case "GET_SEASON_AVERAGES":
      return { ...state, loading: true };
    case "RECIEVE_SEASON_AVERAGES":
      return { ...state, seasonAverages: action.data, loading: false };
    case "REMOVE_PLAYER_STAT":
      newData = state.data.filter((player) => player.id !== action.id);
      return { ...state, data: newData, loading: false };
    default:
      return state;
  }
};

export default StatsReducer;
