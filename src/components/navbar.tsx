import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { deleteUser, setUsers } from "store/reducers/userReducers";

const Navbar: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users);

  const clickHome = () => {
    const data = {
      id: 2,
      name: "Akbar",
      address: "Sudiang",
    };

    dispatch(setUsers([...users, data]));
  };

  const deleteData = (num: number) => {
    dispatch(deleteUser(users.filter((c) => c.id !== num)));
  };
  return (
    <nav>
      <ul>
        <li onClick={clickHome}>Home</li>
        <li
          onClick={() => {
            deleteData(1);
          }}
        >
          Action
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
