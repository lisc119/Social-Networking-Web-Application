import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/actions/authAction";
import { useHistory } from "react-router";
import App from "../App/App";
import styled from "styled-components";
import Password from "../../assets/svgs/password.svg";
import { defaultTheme } from "../style";

const TwoColumns = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const LeftPart = styled.div`
  max-width: 50%;
  flex-grow: 2;
`;

const RightPart = styled.div`
  width: 50%;
  flex-grow: 1;
`;

const LoggedOut = (props) => {
  return (
    <TwoColumns>
      <LeftPart>
        <App />
      </LeftPart>
      <RightPart>{props.children}</RightPart>
    </TwoColumns>
  );
};

const LoginContainer = styled.div`
  button {
    text-transform: uppercase;
  }
  .inputbox {
    padding-top: 40px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    line-height: 26px;
    color: #000000;
  }
  ::placeholder {
    color: black;
  }
  .signup {
    background-color: #ffffff;
    border: 2px solid rgba(0, 0, 0, 0.07);
    font-size: 10px;
    letter-spacing: 1px;
    padding: 13px 40px;
  }
  .signin {
    background: ${defaultTheme.linearGradient};
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 20px;
  }
  nav {
    padding-top: 40px;
    padding-right: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      padding-right: 18px;
      font-size: 14px;
    }
  }
  .rightcontent {
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    margin: 0 auto;
    p {
      font-size: 40px;
      font-weight: 500;
      padding-bottom: 20px;
    }
    .inputbox {
      width: 100%;
      img {
        width: 20px;
        height: 20px;
      }
    }
    input {
      width: 100%;
      padding-left: 20px;
    }
    button {
      width: 85%;
      margin-top: 160px;
    }
  }
`;

export default function FunctionalLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignup = () => {
    history.push("/signup");
  };

  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ email, password }),
    };
    const url = "http://localhost:8000/backend/api/auth/token/";
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        dispatch(authAction(data.access));
        localStorage.setItem("token", data.access);
        history.push("/");
      });
  };

  return (
    <LoggedOut>
      <LoginContainer>
        <nav>
          <p>Don't have an account?</p>
          <button className="signup" onClick={handleSignup}>
            sign up
          </button>
        </nav>
        <div className="rightcontent">
          <p>Sign In</p>
          <div className="inputbox">
            <div className="avatar">
              <i className="far fa-user"></i>
            </div>
            <input
              type="text"
              onChange={handleEmail}
              value={email}
              placeholder="Username"
            />
          </div>
          <div className="inputbox">
            <img src={Password} alt="" />
            <input
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="password"
            />
          </div>
          <button className="signin" onClick={handleSubmit}>
            sign in
          </button>
        </div>
      </LoginContainer>
    </LoggedOut>
  );
}
