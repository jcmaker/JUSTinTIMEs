import React from "react";
import { Link } from "react-router-dom";
import OnlyJustin from "./OnlyJustin";
import JustinUID from "JustinUid";

const Navigation = ({ userObj }) => {
  const isJustin = JustinUID;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">
            <img
              src={userObj.photoURL}
              width="30px"
              height="30px"
              alt="profileIMG"
            />
            {userObj.displayName}'s Profile
          </Link>
        </li>
      </ul>
      <OnlyJustin isOwner={isJustin === userObj.uid} />
    </nav>
  );
};

export default Navigation;
