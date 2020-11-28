import React, { useEffect, useState } from "react";
import { dbService } from "fbManager";
import Times from "components/Times";

const Home = ({ userObj }) => {
  const [times, setTimes] = useState([]);
  const [loadTimes, setLoadTimes] = useState(3);
  useEffect(() => {
    dbService.collection("times").onSnapshot((snapshot) => {
      const timesArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTimes(timesArray);
    });
  }, []);
  const LoadMoreTimes = () => {
    setLoadTimes((prevValue) => prevValue + 3);
  };
  return (
    <div>
      <div>
        {times.slice(0, loadTimes).map((justinTime) => (
          <Times
            key={justinTime.id}
            timeObj={justinTime}
            isOwner={justinTime.creatorId === userObj.uid}
          />
        ))}
      </div>
      <div className="load-more">
        <button onClick={LoadMoreTimes} className="load-more__btn">
          》》 Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
