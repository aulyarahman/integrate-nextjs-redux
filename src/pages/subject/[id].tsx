import React from "react";
import { useSelector, useStore } from "react-redux";
import Link from "next/link";
import { AppState, AppThunk, wrapper } from "store";
import { setUserId, setUsers, UserProps } from "store/reducers/userReducers";
// import { fetchSubject, selectSubject, wrapper } from "store";

const getUserById =
  (user: UserProps): AppThunk =>
  async (dispacth) => {
    const timeoutPromise = (timeout: number) =>
      new Promise((resolve) => setTimeout(resolve, timeout));

    await timeoutPromise(200);

    dispacth(setUserId(user));
  };

const Page = (props) => {
  // console.log("State on render", useStore().getState(), { props });
  const content = useSelector((state: AppState) => state.users.userFind);

  // console[content ? "info" : "warn"]("Rendered content: ", content);

  // if (!content) {
  //   return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  // }

  // console.log("ID", content);

  return (
    <div>
      {/* <h3>{content.name}</h3> */}
      <p>{JSON.stringify(content)}</p>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const { id } = params;

      const find = {
        id: 1,
        name: "JJ",
        address: "KK",
      };

      await store.dispatch(getUserById(find));

      console.log("State on server", store.getState());

      return {
        props: {
          data: find,
        },
      };
    }
);

export default Page;
