import React from "react";
import { GetStaticProps, NextPage } from "next";
import { useSelector } from "react-redux";
import { wrapper, State } from "redux/store";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => () => {
    console.log("2. Page.getStaticProps uses the store to dispatch 'things'");
    store.dispatch({
      type: "TICK",
      payload: "was set in other page " + 1,
    });

    return {
      props: {},
    };
  }
);

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
  console.log("Here");
  const { tick } = useSelector<State, State>((state) => state);
  return <div>{tick}</div>;
};

export default Page;
