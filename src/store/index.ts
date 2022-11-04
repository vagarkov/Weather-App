import { configureStore } from "@reduxjs/toolkit";
import reducer, { RootReducer } from "../reducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const pReducer = persistReducer<RootReducer>(persistConfig, reducer);

const store = configureStore({
  reducer: pReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
