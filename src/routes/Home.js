import React, { useEffect, useState } from "react";
import { dbService } from "fbManager";
import Times from "components/Times";

const Home = ({ userObj }) => {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    dbService.collection("times").onSnapshot((snapshot) => {
      const timesArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTimes(timesArray);
    });
  }, []);

  return (
    <div>
      <div>
        {times.map((justinTime) => (
          <Times
            key={justinTime.id}
            timeObj={justinTime}
            isOwner={justinTime.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
