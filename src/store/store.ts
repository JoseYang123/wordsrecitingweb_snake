import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./slices/userInfoSlice"; // 如果你有另一个用户信息的slice，可以在这里导入
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userInfo: userInfoReducer, // 如果你有另一个用户信息的slice，可以在这里添加
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
