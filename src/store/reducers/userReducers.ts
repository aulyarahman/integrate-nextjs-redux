import { HYDRATE } from "next-redux-wrapper";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProps {
  id: number;
  name: string;
  address: string;
}

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state: UserProps[], action: PayloadAction<UserProps[]>) {
      return action.payload;
    },
    deleteUser(state: UserProps[], action: PayloadAction<number>) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state: UserProps[], action: PayloadAction<UserProps[]>) => {
      console.log("USER HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
