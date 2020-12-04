import React from "react";
import styled from "styled-components";
import PostFooter from "./PostFooter";

const PostContainer = styled.div`
  .post {
    background-color: #ffffff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px 30px;
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .headerleft {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .postinfo {
          padding-left: 15px;
          P:not(:first-child) {
            color: #000000;
            opacity: 0.5;
          }
        }
      }
    }

    .description {
      padding-top: 30px;
    }
  }
`;

export default function Post(props) {
  return (
    <PostContainer>
      <div className="post">
        <header>
          <div className="headerleft">
            <div className="avatar">
              <i className="far fa-user"></i>
            </div>
            <div className="postinfo">
              <p>{props.post.user.first_name}</p>
              <p>
                {props.post.created.slice(0, 10)}{" "}
                {props.post.created.slice(11, 19)}
              </p>
            </div>
          </div>
        </header>
        <p className="description">{props.post.content}</p>
        <PostFooter post={props.post} />
      </div>
    </PostContainer>
  );
}
