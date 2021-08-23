import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, createSlice } from "@reduxjs/toolkit";

interface UserProps {
  id: number;
  name: string;
  address: string;
}

const dataUsers: UserProps[] = [
  {
    id: 0,
    name: "",
    address: "",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState: {} as UserProps,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    // deleteUser: (state, action: AnyAction) => {
    //   state.users = state.users.filter((c) => c.id !== action.payload);
    // },
  },
  extraReducers: {
    [HYDRATE]: (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
