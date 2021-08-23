import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../store";

export interface UserProps {
  name: string;
  address: string;
}

export const users: CreateSliceOptions = {
  name: "users",
  initialState: {} as UserProps,
  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
};
