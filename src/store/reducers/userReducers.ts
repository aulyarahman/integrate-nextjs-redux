import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(_state, { payload }) {
      return payload;
    },
    deleteUser(state, action) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("USER HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
