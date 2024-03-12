// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './modules/exemploSlice/exemploSlice'
// export const store = configureStore({
//     reducer : {
//         cart : cartReducer
//     }
// })

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

});

export const persistor = persistStore(store);