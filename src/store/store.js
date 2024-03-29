import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {rootReducer} from './rootReducer';


const persistConfig = {
  key: "root",
  storage,
  whitelist: ['SuperExemplo'], // Lista dos reducers que você deseja persistir

  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

});

export const persistor = persistStore(store);
