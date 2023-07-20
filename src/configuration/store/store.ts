import { settingsReducer } from '@/entities/settings/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
