import { combineReducers } from "@reduxjs/toolkit";
import search from "./searchReducer";

const RootReducer = combineReducers({
  search,
});

export default RootReducer;
