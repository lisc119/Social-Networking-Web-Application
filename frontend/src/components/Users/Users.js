import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Nav from "../Post/Nav";
import { getUsersAction } from "../../store/actions/getUsersAction";

export default function Users() {
  const list = useSelector((state) =>
    state.users === undefined ? null : state.users.list
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list) {
      dispatch(getUsersAction);
    }
  }, [dispatch, list]);

  if (!list) {
    return <p>Loading page...</p>;
  }
  return (
    <div>
      <Nav />
      {list.map((user) => {
        return (
          <p key={user.id}>
            {user.first_name} {user.last_name}
          </p>
        );
      })}
    </div>
  );
}
