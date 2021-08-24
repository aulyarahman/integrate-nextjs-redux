import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { deleteUser, setUsers } from "store/reducers/userReducers";
import { Box, Button } from "@chakra-ui/react";

const Navbar: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users.users);

  const clickHome = () => {
    const data = {
      id: 2,
      name: "Akbar",
      address: "Sudiang",
    };

    dispatch(setUsers([...users, data]));
  };

  const deleteData = () => {
    dispatch(deleteUser(1));
  };
  return (
    <Box as="nav" flexDirection="row">
      <Button colorScheme="teal" variant="outline" onClick={clickHome}>
        Tambah
      </Button>
      <Button colorScheme="teal" variant="outline" onClick={deleteData}>
        Kurang
      </Button>
    </Box>
  );
};

export default Navbar;
