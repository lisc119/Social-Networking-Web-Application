import React, { useState } from "react";
import Jennifer from "../../assets/images/users/jennifer.png";
import UserMenu from "./UserMenu";

export default function UserInfo() {
  const [menuOpen, setmenuOpen] = useState(false);

  const handleClick = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <button onClick={handleClick}>
          <img src={Jennifer} alt="" />
        </button>
        {menuOpen && <UserMenu />}
      </div>
    </>
  );
}
