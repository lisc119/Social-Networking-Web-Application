const initialState = {
  token: null,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      const token = action.payload;
      return { ...state, token: token };
    }
    case "GET_USER": {
      const user = action.payload;
      return { ...state, user: user };
    }
    case "LOGOUT": {
      localStorage.clear();
      let state = { ...initialState };
      return state;
    }
    default:
      return state;
  }
};
