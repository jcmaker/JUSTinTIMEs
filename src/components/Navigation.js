import React, { useState } from "react";
import { Link } from "react-router-dom";
import OnlyJustin from "./OnlyJustin";
import JustinUID from "JustinUid";

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
      <div className="header">
        <div className="header__middle">
          <div className="header__link current-page">
            <a href="/">Home</a>
          </div>
          <div className="header__link">
            <Link to="/AboutJustin">About Me</Link>
          </div>
          <div className="header__link">
            <Link to="/ContactJustin">Contact</Link>
          </div>
          <div className="header__link">
            <Link to="/Projects">Projects</Link>
          </div>
        </div>
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
            <Link to="/profile">
              <img src={userObj.photoURL} width="30px" height="30px" alt="" />
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
