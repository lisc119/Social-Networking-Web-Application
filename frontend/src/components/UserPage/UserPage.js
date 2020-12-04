import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Nav from "../Post/Nav";
import { myPostListAction } from "../../store/actions/postMeListAction";
import Post from "../Post/Post";

const PostListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px 30px;
  margin-top: 30px;
`;

const PostBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  .line {
    border-bottom: 1px solid #f2f2f2;
  }
  .postMain {
    width: 1440px;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }
`;

export default function UserPage() {
  const list = useSelector((state) => state.post.myposts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list) {
      dispatch(myPostListAction);
    }
  }, [dispatch, list]);

  if (!list) {
    return <p>Loading page...</p>;
  }

  return (
    <PostBody>
      <Nav />
      <div className="postMain">
        <div className="line"></div>
        <PostListContainer>
          {list.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </PostListContainer>
      </div>
    </PostBody>
  );
}
