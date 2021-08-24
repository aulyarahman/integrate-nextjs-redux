import { HYDRATE } from "next-redux-wrapper";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProps {
  id: number;
  name: string;
  address: string;
}

export interface PayloadUserProps {
  users: UserProps[];
}

export const userSlice = createSlice({
  name: "users",
  initialState: [] as UserProps[],
  reducers: {
    setUsers(state: UserProps[], action: PayloadAction<UserProps[]>) {
      return action.payload;
    },
    deleteUser(state: UserProps[], action: PayloadAction<UserProps[]>) {
      // return state.filter((c) => c.id !== action.payload);
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (
      state: UserProps[],
      action: PayloadAction<PayloadUserProps>
    ) => {
      return (state = action.payload.users);
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
