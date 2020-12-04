import React from "react";
import Heart from "../../assets/svgs/heart.svg";
import Share from "../../assets/svgs/share.svg";
import styled from "styled-components";
import { toggleLikeAction } from "../../store/actions/toggleLikeAction";
import { useDispatch } from "react-redux";

const FooterContainer = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footerleft {
    width: 39%;
    display: flex;
    justify-content: space-between;
    .like {
      display: flex;
      align-items: center;
    }
    .byme .svg-icon path {
      filter: red;
    }
    .share {
      display: flex;
      align-items: center;
    }
    p {
      padding-left: 18px;
      font-size: 14px;
    }
  }
  .footerright {
    font-size: 14px;
    color: #000000;
    opacity: 0.5;
  }
`;

export default function PostFooter(props) {
  const dispatch = useDispatch();
  const toggleLike = () => {
    const toggleId = props.post.id;
    dispatch(toggleLikeAction(toggleId));
  };

  return (
    <FooterContainer>
      <div className="footerleft">
        <div className="like">
          <button onClick={toggleLike}>
            <img src={Heart} alt="" />
          </button>
          <p>Like</p>
        </div>
        <div className="share">
          <img src={Share} alt="" />
          <p>Share</p>
        </div>
      </div>
      <p className="footerright">{props.post.amount_of_likes} Likes</p>
    </FooterContainer>
  );
}
