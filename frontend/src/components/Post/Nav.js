import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import PostsLogo from "../../assets/images/posts_logo.png";
import IconFriends from "../../assets/svgs/icon-friends.svg";
import NotificationBell from "../../assets/svgs/notification_bell.svg";
import Menu from "../../assets/svgs/menu.svg";
import { defaultTheme } from "../style";
import UserInfo from "../UserInfo/UserInfo";

const NavContainer = styled.div`
  .nav {
    z-index: 0;
    width: 1440px;
    flex: 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 10px 20px rgba(0, 0, 0, 0.05);
    .leftnav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home {
        padding: 10px 20px; 
        display: flex;
        align-items: center;
        .motion {
          padding-left: 5px; 
        }
      }
      .function {
        height: 80px;
        width: 300px; 
        display: flex;
        justify-content: space-evenly;
        .active {
          border-bottom: 2px solid #ad73fd;
        }
        a {
          color: black;
          display: flex;
          text-decoration: none;
          align-items: center;
        }
        p {
          padding-left: 10px; 
        }
      }
    }
    .rightnav {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .notification {
        display: flex;
        align-items: center;
        .circlespace {
          padding-bottom: 20px;
          .circle {
            width: 18px;
            height: 18px;
            background: ${defaultTheme.linearGradient};
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
              font-size: 10px;
              color: white;
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
`;
function FunctionLink(props) {
  const location = useLocation();
  const active = location.pathname === props.path;

  return (
    <Link to={props.path} className={active && "active"}>
      <img src={props.logo} alt={props.name} />
      <p>{props.name}</p>
    </Link>
  );
}

export default function Nav() {
  return (
    <NavContainer>
      <nav className="nav line">
        <div className="leftnav">
          <div className="home">
            <img src={Logo} alt="" />
            <p className="motion">Motion</p>
          </div>
          <div className="function">
            <FunctionLink name="Posts" logo={PostsLogo} path="/" />
            <FunctionLink
              name="Find Friends"
              logo={IconFriends}
              path="/users"
            />
          </div>
        </div>
        <div className="rightnav">
          <div className="notification">
            <img src={NotificationBell} alt="" />
            <div className="circlespace">
              <div className="circle">
                <p>3</p>
              </div>
            </div>
          </div>
          <UserInfo />
          <img src={Menu} alt="" />
        </div>
      </nav>
    </NavContainer>
  );
}
