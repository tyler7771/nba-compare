const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PLAYERS":
      return { ...state, loading: true };
    case "RECIEVE_PLAYERS":
      return { ...state, players: action.json, loading: false };
    case "CLEAR_SEARCH":
      return { ...state, players: null, loading: false };
    default:
      return state;
  }
};

export default searchReducer;
