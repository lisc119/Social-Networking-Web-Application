import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCreateAction } from "../../store/actions/postCreateAction";
import styled from "styled-components";
import SendButton from "../../assets/svgs/send_button.svg";

import { defaultTheme } from "../style";

const PostCreateContainer = styled.div`
  .publish {
    background-color: #ffffff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    input {
      border: none;
      color: #000000;
      opacity: 0.5;
      width: 65%;
      line-height: 26px;
    }
    button {
      width: 50px;
      height: 50px;
      background: ${defaultTheme.linearGradient};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        color: white;
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default function PostCreate() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.info);
  const placeholder = userInfo
    ? `What's on your mind, ${userInfo.name}?`
    : "What's on your mind?";

  const handleClick = () => {
    const text = inputRef.current.value;

    const body = {
      content: text,
    };

    dispatch(postCreateAction(body));
    inputRef.current.value = placeholder;
  };

  return (
    <PostCreateContainer>
      <div className="publish">
        <div className="avatar">
          <i className="far fa-user"></i>
        </div>
        <input ref={inputRef} type="text" placeholder={placeholder} />
        <button onClick={handleClick}>
          <img src={SendButton} alt="" />
        </button>
      </div>
    </PostCreateContainer>
  );
}
