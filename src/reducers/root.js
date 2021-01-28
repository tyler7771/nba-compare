import { combineReducers } from "@reduxjs/toolkit";
import players from "./playerReducer";
import search from "./searchReducer";
import stats from "./statsReducer";

const RootReducer = combineReducers({
  players,
  search,
  stats,
});

export default RootReducer;
