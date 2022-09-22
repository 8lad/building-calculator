import { combineReducers } from "@reduxjs/toolkit";
import { currencyReducer } from "./slices/currencySlice";

export const rootReducer = combineReducers({
  currency: currencyReducer,
});
