import orderById from "./orderByHelper";

const StatsReducer = (state = { lastTen: [] }, action) => {
  switch (action.type) {
    case "GET_SEASON_AVERAGES":
      return { ...state, loading: true };
    case "RECIEVE_SEASON_AVERAGES":
      return {
        ...state,
        seasonAverages: orderById(action.data),
        loading: false,
      };
    case "CLEAR_LAST_TEN_STATS":
      return { ...state, lastTen: [], loading: false };
    case "RECIEVE_LAST_TEN_STATS":
      return {
        ...state,
        lastTen: [...state.lastTen, action.lastTen],
        loading: false,
      };
    default:
      return state;
  }
};

export default StatsReducer;
