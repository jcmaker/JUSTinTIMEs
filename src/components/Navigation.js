import React, { useState } from "react";
import { Link } from "react-router-dom";
import OnlyJustin from "./OnlyJustin";
import JustinUID from "JustinUid";
import { Avatar } from "@material-ui/core";
import NavLink from "./NavLink";

const Navigation = ({ userObj }) => {
  const isJustin = JustinUID;

  const date = new Date();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  const TotalTime = date.toLocaleTimeString();

  const [cTime, setCTime] = useState(TotalTime);

  const UpdateCTime = () => {
    const TotalTime = date.toLocaleTimeString();
    setCTime(TotalTime);
  };

  setInterval(UpdateCTime, 1000);
  return (
    <>
      <div className="header-second">
        <NavLink />
        <div className="header__bottom">
          <div className="clock">
            <h1 className="clock__time" on>
              {cTime}
            </h1>
          </div>
          <div className="weather">
            <div>weather</div>
          </div>
          <div className="topic">
            <Link to="/profile" className="topic__info">
              <Avatar src={userObj.photoURL} />
              {/* <img src={userObj.photoURL} width="30px" height="30px" alt="" /> */}
              <span>{userObj.displayName}</span>
            </Link>
            <OnlyJustin isOwner={isJustin === userObj.uid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
