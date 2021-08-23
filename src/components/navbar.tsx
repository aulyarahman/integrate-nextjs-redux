import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { setUsers } from "store/reducers/userReducers";

const Navbar: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users);

  const clickHome = () => {
    const data = {
      id: 3,
      name: "Akbar",
      address: "Sudiang",
    };

    dispatch(setUsers([...users, data]));
  };
  return (
    <nav>
      <ul>
        <li onClick={clickHome}>Home</li>
        <li>Action</li>
      </ul>
    </nav>
  );
};

export default Navbar;
