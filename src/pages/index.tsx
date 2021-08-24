import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "store/reducers/userReducers";
import { Button } from "@chakra-ui/button";

import UserList from "components/UserList";

const dd = [
  {
    address: "TES1",
    id: 1,
    name: "TES2",
  },
  {
    address: "TES4",
    id: 2,
    name: "TES4",
  },
];

const PageIndex = () => {
  const dispatch = useDispatch();
  // console.log("State on render", useStore().getState());
  const getUserList = async () => {
    dispatch(setUsers(dd));
  };

  return (
    <div>
      <UserList />
      <Button colorScheme="blue" onClick={getUserList}>
        Update Data
      </Button>
    </div>
  );
};

export default PageIndex;
