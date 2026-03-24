import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  email: string;
  server: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  username: '',
  email: '',
  server: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; email: string; server: string }>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.server = action.payload.server;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.username = '';
      state.email = '';
      state.server = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
