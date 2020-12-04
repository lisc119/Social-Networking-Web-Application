export const authAction = (token) => {
  return {
    type: "USER_LOGIN",
    payload: token,
  };
};
