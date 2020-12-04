export const postCreateAction = function (body) {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    const config = {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    };
    const url = "http://0.0.0.0:8000/backend/api/social/posts/";
    fetch(url, config)
      .then((r) => r.json())
      .then((data) => {
        // here we get the newly created post object back from the API
        dispatch({
          type: "ADD_POST",
          post: data,
        });
      });
  };
};
