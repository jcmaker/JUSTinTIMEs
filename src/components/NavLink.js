import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

const NavLink = () => {
  return (
    <div className="header__middle">
      <CloseIcon
        onClick={() => {
          document.querySelector(".header__middle").classList.toggle("open");
        }}
      />
      <div className="header__link current-page">
        <Link
          to="/"
          onClick={() => {
            document.querySelector(".header__middle").classList.toggle("open");
          }}
        >
          Home
        </Link>
      </div>
      <div className="header__link">
        <Link
          to="/AboutJustin"
          onClick={() => {
            document.querySelector(".header__middle").classList.toggle("open");
          }}
        >
          About Me
        </Link>
      </div>
      <div className="header__link">
        <Link
          to="/ContactJustin"
          onClick={() => {
            document.querySelector(".header__middle").classList.toggle("open");
          }}
        >
          Contact
        </Link>
      </div>
      <div
        className="header__link"
        onClick={() => {
          document.querySelector(".header__middle").classList.toggle("open");
        }}
      >
        <Link to="/Projects">Projects</Link>
      </div>
    </div>
  );
};

export default NavLink;
