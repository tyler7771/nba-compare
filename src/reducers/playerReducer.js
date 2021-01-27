const initialState = {
  data: [
    {
      first_name: "Malcolm",
      height_feet: 6,
      height_inches: 5,
      id: 65,
      last_name: "Brogdon",
      position: "G",
      team: {
        abbreviation: "IND",
        city: "Indiana",
        conference: "East",
        division: "Central",
        full_name: "Indiana Pacers",
        id: 12,
        name: "Pacers",
      },
      weight_pounds: 229,
    },
    {
      first_name: "Jeremy",
      height_feet: 6,
      height_inches: 5,
      id: 267,
      last_name: "Lamb",
      position: "G",
      team: {
        abbreviation: "IND",
        city: "Indiana",
        conference: "East",
        division: "Central",
        full_name: "Indiana Pacers",
        id: 12,
        name: "Pacers",
      },
      weight_pounds: 185,
    },
  ],
};

const searchReducer = (state = initialState, action) => {
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
