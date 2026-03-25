import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  account: string;
  username: string;
  //email: string;
  password: string;
  token: string;
  level: number;
  coins: number;
  season: number;
  server: string;
  isLoggedIn: boolean;
  dailyWordCount?: number; // 可选属性，记录每天的单词数量
}

const initialState: UserState = {
  account: "",
  username: "",
  password: "",
  //email: "",
  level: 0,
  coins: 0,
  season: 0,
  server: "",
  isLoggedIn: false,
  token: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      // 合并 initialState，保证所有字段都有默认值
      console.log("setUser action payload:", action.payload);
      console.log("Current state before setUser:", state);
      const newState = { ...state, ...action.payload };
      console.log("New state after setUser:", newState);
      return newState;
    },
    setDailyWordCount(state, action: PayloadAction<number>) {
      state.dailyWordCount = action.payload;
    },
    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLoginFalse(state) {
      state.isLoggedIn = false;
    },

    resetUser() {
      //reset user info to initial state

      console.log("Resetting user info to initial state:", initialState);
      return initialState;
    },
  },
});

export const { setUser, setDailyWordCount, updateToken, resetUser } =
  userInfoSlice.actions;
export default userInfoSlice.reducer;
