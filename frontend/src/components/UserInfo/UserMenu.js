import React from "react";
import { useDispatch } from "react-redux";
import { getUserAction } from "../../store/actions/getUserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { useHistory } from "react-router";
import { logoutAction } from "../../store/actions/logoutAction";

const Outer = styled.div`
  background: rgba(255, 255, 255, 0);
  height: 100vh;
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Inner = styled.div`
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background: white;
  height: 96px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const UserButton = styled.button`
  width: 100%;
  height: 40%;
  border-radius: 0;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProfile = () => {
    dispatch(getUserAction);
    history.push("/user");
  };

  const handleLogout = () => {
    dispatch(logoutAction);
  };

  return (
    <>
      <Outer>
        <Inner>
          <UserButton onClick={handleProfile}>
            <FontAwesomeIcon icon={faUserCircle} /> Profile
          </UserButton>
          <UserButton onClick={handleLogout}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} /> Logout
          </UserButton>
        </Inner>
      </Outer>
    </>
  );
}
