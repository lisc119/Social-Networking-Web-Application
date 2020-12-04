export const myPostListAction = (dispatch, getState) => {
  const token = getState().auth.token;
  const url = "http://0.0.0.0:8000/backend/api/social/posts/me/";
  fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      dispatch({
        type: "SET_MY_POST_LIST",
        posts: data,
      });
    });
};
