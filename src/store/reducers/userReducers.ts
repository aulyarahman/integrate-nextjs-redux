import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProps {
  id: number;
  name: string;
  address: string;
}

export interface PayloadUserProps {
  users: UserProps[];
  userFind?: UserProps;
}

interface PayloadHydrate {
  users: {
    users: UserProps[];
    userFind?: UserProps;
  };
}

const stateInit: PayloadUserProps = {
  users: [
    {
      name: "",
      address: "",
      id: 1,
    },
  ],
  userFind: {
    name: "",
    address: "",
    id: 1,
  },
};

export const userSlice = createSlice({
  name: "users",
  initialState: stateInit,
  reducers: {
    setUsers: (state: PayloadUserProps, action: PayloadAction<UserProps[]>) => {
      state.users = action.payload;
    },
    setUserId: (state: PayloadUserProps, action: PayloadAction<UserProps>) => {
      state.userFind = action.payload;
    },
    deleteUser(state: PayloadUserProps, action: PayloadAction<number>) {
      state.users.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (
      state: PayloadUserProps,
      action: PayloadAction<PayloadHydrate>
    ) => {
      (state.users = action.payload.users.users),
        (state.userFind = action.payload.users.userFind);
    },
  },
});

export const { setUsers, deleteUser, setUserId } = userSlice.actions;

export default userSlice.reducer;
