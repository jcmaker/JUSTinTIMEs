import React from "react";
import { Link } from "react-router-dom";

const OnlyJustin = ({ isOwner }) => (
  <div>
    {isOwner && (
      <>
        <button>
          <Link to="/jcJustinTimes0627">come here Justin</Link>
        </button>
      </>
    )}
  </div>
);

export default OnlyJustin;
