const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PLAYERS":
      return { ...state, loading: true };
    case "RECIEVE_PLAYERS":
      return { ...state, players: action.json, loading: false };
    default:
      return state;
  }
};

export default searchReducer;
