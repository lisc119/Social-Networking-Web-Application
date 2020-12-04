export const getUsersAction = (dispatch, getState) => {
  const token = getState().auth.token;
  fetch("http://0.0.0.0:8000/backend/api/users", {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((r) => r.json())
    .then((users) => {
      dispatch({
        type: "SET_USERS_LIST",
        payload: users,
      });
    });
};