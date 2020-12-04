import { createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { postReducer } from "./reducers/postReducer";
import { combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  auth: authReducer,
  post: postReducer,
  users: usersReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
