import React from "react";
import { Link } from "react-router-dom";
import EditLocationIcon from "@material-ui/icons/EditLocation";

const OnlyJustin = ({ isOwner }) => (
  <div>
    {isOwner && (
      <>
        <button>
          <Link to="/jcJustinTimes0627">
            <EditLocationIcon />
          </Link>
        </button>
      </>
    )}
  </div>
);

export default OnlyJustin;
