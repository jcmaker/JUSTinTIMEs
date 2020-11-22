import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/jcJustinTimes0627">come here justin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
