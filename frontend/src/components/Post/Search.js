import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/svgs/search_icon.svg";

const SearchContainer = styled.div`
  width: 100%;
  flex: 0 0 80px;
  background-color: #f8f8f9;
  display: flex;
  justify-content: center;
  .search {
    width: 1152px;
    display: flex;
    justify-content: space-between;
    .searchinput {
      display: flex;
      input {
        border: none;
        color: #000000;
        opacity: 0.5;
        padding-left: 10px; 
        background-color: #f8f8f9; // set to cancel default input backgtound-color of Chrome browser
      }
    }
    .tabs {
      width: 20%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      .selectedtab {
        border-bottom: 2px solid #000000;
        display: flex;
        align-items: center;
      }
      p {
        align-self: center;
        padding-bottom: 1px;
      }
    }
  }
`;

export default function Search() {
  return (
    <SearchContainer>
      <div className="search">
        <div className="searchinput">
          <img src={SearchIcon} alt="" />
          <input type="text" placeholder="Search posts..." />
        </div>
        <div className="tabs">
          <div className="selectedtab">
            <p>Liked</p>
          </div>
          <p>Friends</p>
          <p>Follow</p>
        </div>
      </div>
    </SearchContainer>
  );
}
