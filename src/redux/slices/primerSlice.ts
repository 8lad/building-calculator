import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrimerProductInterface } from "../../server/primerProductsGroup";

export interface PrimerStateInterface {
  primer: PrimerProductInterface | null;
  layersAmount: number;
  workingArea: number;
  materialСonsumption: number;
}

const initialState: PrimerStateInterface = {
  primer: {
    name: "",
    value: 0,
  },
  layersAmount: 0,
  workingArea: 0,
  materialСonsumption: 0,
};

const primerSlice = createSlice({
  name: "primer",
  initialState,
  reducers: {
    setPrimeOptions: (_, action: PayloadAction<PrimerStateInterface>) =>
      action.payload,
    resetPrimeState: () => initialState,
  },
});

export const primerReducer = primerSlice.reducer;
export const { setPrimeOptions, resetPrimeState } = primerSlice.actions;
