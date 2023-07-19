import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum CurrencyFormatByValue {
  'RUB' = 'RUB',
  'USD' = 'USD',
  'EUR' = 'EUR',
  'PLN' = 'PLN',
}

export enum DateFormatByValue {
  'MM/DD/YYYY' = 'month first',
  'DD/MM/YYYY' = 'day first',
  'YYYY/DD/MM' = 'year, then day',
  'YYYY/MM/DD' = 'year, then month',
}

type InitialState = {
  currencyFormat: CurrencyFormatByValue;
  dateFormat: DateFormatByValue;
};

const initialState: InitialState = {
  currencyFormat: CurrencyFormatByValue['RUB'],
  dateFormat: DateFormatByValue['DD/MM/YYYY'],
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeCurrencyFormat: (state, action: PayloadAction<CurrencyFormatByValue>) => {
      state.currencyFormat = action.payload;
    },
    changeDateFormat: (state, action: PayloadAction<DateFormatByValue>) => {
      state.dateFormat = action.payload;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { changeCurrencyFormat, changeDateFormat } = settingsSlice.actions;
