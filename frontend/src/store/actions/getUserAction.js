export const getUserAction = (dispatch, getState) => {
  const token = getState().auth.token;
  const url = "http://0.0.0.0:8000/backend/api/users/me/";
  fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((r) => r.json())
    .then((user) => {
      dispatch({
        type: "GET_USER",
        payload: user,
      });
    });
};
