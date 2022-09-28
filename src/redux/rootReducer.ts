import { combineReducers } from "@reduxjs/toolkit";
import { currencyReducer } from "./slices/currencySlice";
import { primerReducer } from "./slices/primerSlice";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  primer: primerReducer,
});
