import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const authHOC = (WrappedComponent) => {
  return () => {
    const token = useSelector((state) => state.auth.token);

    const history = useHistory();
    if (token) {
      return <WrappedComponent />;
    } else {
      history.push("/login");
      return null;
    }
  };
};
