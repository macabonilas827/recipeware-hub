import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signInSuccess, signOut } = authSlice.actions;
export default authSlice.reducer;
