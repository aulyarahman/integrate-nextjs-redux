import React from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import { setUsers } from "store/reducers/userReducers";
import { AppState } from "store";

const PageIndex = () => {
  const dispatch = useDispatch();
  console.log("State on render", useStore().getState());
  const getUserList = async () => {
    const dd = [
      {
        id: 1,
        name: "Aulia",
        address: "Rahman",
      },
      {
        id: 2,
        name: "Rahman",
        address: "Rahman XX",
      },
    ];

    dispatch(setUsers([...dd]));
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
