export const postListAction = (dispatch, getState) => {
  const token = getState().auth.token;
  const url = "http://0.0.0.0:8000/backend/api/social/posts/";
  fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      dispatch({
        type: "SET_POST_LIST",
        posts: data,
      });
    });
};
