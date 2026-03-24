import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  account: string;
  username: string;
  email: string;
  password: string;
  token: string;

  level: number;
  coins: number;
  season: number;

  server: string;

  isLoggedIn: boolean;
}

const initialState: UserState = {
  account: "",
  username: "",
  password: "",
  email: "",
  token: "",
  level: 0,
  coins: 0,
  season: 0,
  server: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
    setDailyWordCount(state, action: PayloadAction<number>) {
      state.dailyWordCount = action.payload;
    },
    resetUser() {
      return initialState;
    },
  },
});

export const { setUser, setDailyWordCount, resetUser } = userSlice.actions;
export default userSlice.reducer;
