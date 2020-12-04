import React from "react";
import LogoWhite from "../../assets/images/logo_white.png";
import Apple from "../../assets/svgs/apple.svg";
import Google from "../../assets/svgs/google.svg";
import BackgroundImage from "../../assets/images/background_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { defaultTheme } from "../style";

const AppContainer = styled.div`
  background-image: url(${BackgroundImage}), ${defaultTheme.linearGradient};
  background-repeat: no-repeat;
  background-size: cover;

  .leftcontent {
    padding-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: 0 auto;

    button {
      padding: 7px 20px;
    }
  }

  .logo {
    height: 80px;
    width: 80px;
  }
  h1 {
    padding-top: 15px;
    color: white;
    font-size: 30px;
    letter-spacing: 0.75px;
  }
  .message {
    padding-top: 20px;
    color: white;
    line-height: 24px;
    text-align: center;
    opacity: 0.6;
  }

  .appbuttons {
    padding-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .googleicon {
      margin-top: 5px;
    }
  }

  .socialmedia {
    padding-top: 130px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
    }
    i {
      color: #8f8ed1;
    }
  }
  .copyright {
    padding-top: 40px;
    font-size: 12px;
    color: white;
  }
`;

export default function App() {
  return (
    <AppContainer>
      <div className="leftcontent">
        <img className="logo" src={LogoWhite} alt="" />
        <h1>Motion</h1>
        <p className="message">
          Connect with friends and the world around you with Motion.
        </p>
        <div className="appbuttons">
          <button>
            <img src={Apple} alt="" />
          </button>
          <button>
            <img className="googleicon" src={Google} alt="" />
          </button>
        </div>
        <div className="socialmedia">
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <p className="copyright">© Motion 2018. All rights reserved</p>
      </div>
    </AppContainer>
  );
}
