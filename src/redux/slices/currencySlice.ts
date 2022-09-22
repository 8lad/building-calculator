import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DOLLAR_CODE, EURO_CODE } from "../../utils/constants";
import { returnErrorText } from "../../utils/helpers";

export interface CurrencyItem {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

interface InitialState {
  dollar: CurrencyItem | null;
  euro: CurrencyItem | null;
  isLoading: boolean;
  error: string;
}

const initialState = {
  euro: null,
  dollar: null,
  error: "",
  isLoading: true,
} as InitialState;

export const fetchCurrency = createAsyncThunk<
  CurrencyItem[],
  string,
  { rejectValue: string }
>("currency/fetchCurrency", async (url, thunkApi) => {
  try {
    const request = await fetch(url);
    if (!request.ok && request.status >= 400) {
      return thunkApi.rejectWithValue(request.statusText);
    }
    const response = await request.json();
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue(returnErrorText(e as Error));
  }
});

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCurrency.fulfilled,
      (state, action: PayloadAction<CurrencyItem[]>) => {
        state.dollar = action.payload.find(
          (item) => item.ccy === DOLLAR_CODE,
        ) as CurrencyItem;
        state.euro = action.payload.find(
          (item) => item.ccy === EURO_CODE,
        ) as CurrencyItem;
        state.isLoading = false;
      },
    );
    builder.addCase(
      fetchCurrency.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload ?? "unexpectable error";
      },
    );
  },
});

export const currencyReducer = currencySlice.reducer;
