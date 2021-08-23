import React from "react";
import { useSelector, useStore } from "react-redux";
import Link from "next/link";
import {
  AppThunk,
  fetchSubject,
  getUserList,
  selectSubject,
  selectUsers,
  userSlice,
  wrapper,
} from "../../../store";

const PageIndex = () => {
  console.log("State on render", useStore().getState());
  const content = useSelector(selectUsers());

  console[content ? "info" : "warn"]("Rendered content: ", content);

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }

  return (
    <div>
      <h3>{content.name}</h3>
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
