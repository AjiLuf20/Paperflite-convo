import { combineReducers } from "@reduxjs/toolkit";
import users from "./user";

const rootReducer = combineReducers({
  users,
  // if we need other reducers in future, We can add them here
  // if we need other reducers in future, We can add them here
});

export default rootReducer;
