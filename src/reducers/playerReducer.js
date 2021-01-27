const searchReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "GET_PLAYER":
      return { ...state, loading: true };
    case "RECIEVE_PLAYER":
      const newData = state.data.concat([action.json]);
      return { ...state, data: newData, loading: false };
    default:
      return state;
  }
};

export default searchReducer;
