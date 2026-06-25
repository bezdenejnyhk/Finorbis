
import { langSlice } from "./lang";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  lang: langSlice.reducer,
});