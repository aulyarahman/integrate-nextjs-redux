import React from "react";
import { useSelector, useStore } from "react-redux";
import { AppThunk, wrapper } from "store";
import { setUsers, UserProps } from "store/reducers/userReducers";
import { AppState } from "store";

export const getUserList = (): AppThunk => async (dispatch) => {
  const timeoutPromise = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

  await timeoutPromise(200);

  const dd = [
    {
      id: 1,
      name: "Aulia",
      address: "Rahman",
    },
    {
      id: 2,
      name: "Aulia",
      address: "Rahman",
    },
  ];

  const data: UserProps[] = [];
  data.push(...dd);

  dispatch(setUsers(data));
};

const PageIndex = () => {
  // console.log("State on render", useStore().getState());
  // console[content ? "info" : "warn"]("Rendered content: ", content);

  const content = useSelector((state: AppState) => state.users);

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }

  console.log(content);

  return (
    <div>
      <p>{JSON.stringify(content)}</p>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // const { id } = params;

      await store.dispatch(getUserList());

      console.log("State on server", store.getState());

      return {
        props: {
          data: {},
        },
      };
    }
);

export default PageIndex;
