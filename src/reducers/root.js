import { combineReducers } from "@reduxjs/toolkit";
import players from "./playerReducer";
import search from "./searchReducer";

const RootReducer = combineReducers({
  players,
  search,
});

export default RootReducer;
