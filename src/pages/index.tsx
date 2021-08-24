import React from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import {
  PayloadUserProps,
  setUsers,
  UserProps,
} from "store/reducers/userReducers";
import { AppState } from "store";

const dd = [
  {
    address: "TES1",
    id: 3,
    name: "TES2",
  },
  {
    address: "TES4",
    id: 4,
    name: "TES4",
  },
];

const PageIndex = () => {
  const dispatch = useDispatch();
  console.log("State on render", useStore().getState());
  const getUserList = async () => {
    dispatch(setUsers(dd));
  };

  const content = useSelector((state: AppState) => state.users);

  return (
    <div>
      <p>{JSON.stringify(content)}</p>
      <button onClick={getUserList}>Update Data</button>
    </div>
  );
};

export default PageIndex;
