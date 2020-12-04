import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Post from "./routes/Post";
import { store } from "./store/store";
import { authHOC } from "./components/authHOC";
import { authAction } from "./store/actions/authAction";
import FunctionalLogin from "./components/FunctionalLogin";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./components/style";
import Signup from "./routes/Signup";
import User from "./routes/User";
import Users from "./components/Users/Users";

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(authAction(token));
}

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={authHOC(Post)} />
          <Route exact path="/login" component={FunctionalLogin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={User} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
