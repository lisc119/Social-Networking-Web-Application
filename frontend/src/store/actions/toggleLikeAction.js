export const toggleLikeAction = function (toggleId) {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    };
    const url = `http://0.0.0.0:8000/backend/api/social/posts/toggle-like/${toggleId}/`;
    fetch(url, config)
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: "TOGGLE_LIKE",
          toggledPost: data,
        });
      });
  };
};
