import React from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import { AppThunk, wrapper } from "store";
import { setUsers } from "store/reducers/userReducers";
import { AppState } from "store";
import { UserProps } from "components/userSlice";

const PageIndex = () => {
  const dispatch = useDispatch();
  console.log("State on render", useStore().getState());
  const getUserList = async () => {
    const dd = {
      id: 1,
      name: "Aulia",
      address: "Rahman",
    };

    dispatch(setUsers(dd));
  };

  const content = useSelector((state: AppState) => state.users);

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }

  return (
    <div>
      <h3>{JSON.stringify(content)}</h3> <br />
      <button onClick={getUserList}>Update Data</button>
    </div>
  );
};

export default PageIndex;
