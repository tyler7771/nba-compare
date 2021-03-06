import orderById from "./orderByHelper";

const initialState = {
  data: [
    {
      id: 54,
      first_name: "Bojan",
      height_feet: 6,
      height_inches: 8,
      last_name: "Bogdanovic",
      position: "F",
      team: {
        id: 29,
        abbreviation: "UTA",
        city: "Utah",
        conference: "West",
        division: "Northwest",
        full_name: "Utah Jazz",
        name: "Jazz",
      },
      weight_pounds: 216,
    },
    {
      id: 237,
      first_name: "LeBron",
      height_feet: 6,
      height_inches: 8,
      last_name: "James",
      position: "F",
      team: {
        abbreviation: "LAL",
        city: "Los Angeles",
        conference: "West",
        division: "Pacific",
        full_name: "Los Angeles Lakers",
        id: 14,
        name: "Lakers",
      },
      weight_pounds: 250,
    },
    {
      id: 267,
      first_name: "Jeremy",
      height_feet: 6,
      height_inches: 5,
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

const PlayerReducer = (state = initialState, action) => {
  let newData;

  switch (action.type) {
    case "GET_PLAYER":
      return { ...state, loading: true };
    case "RECIEVE_PLAYER":
      return {
        ...state,
        data: orderById([...state.data, action.json]),
        loading: false,
      };
    case "REMOVE_PLAYER":
      newData = state.data.filter((player) => player.id !== action.id);
      return { ...state, data: newData, loading: false };
    default:
      return state;
  }
};

export default PlayerReducer;
