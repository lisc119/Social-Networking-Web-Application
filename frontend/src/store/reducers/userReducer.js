const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS_LIST": {
      return { ...state, list: action.payload };
    }
    default:
      return state;
  }
};
