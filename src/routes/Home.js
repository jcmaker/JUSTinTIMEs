import React, { useEffect, useState } from "react";
import { dbService } from "fbManager";
import Times from "components/Times";

const Home = ({ userObj, timeObj }) => {
  const [times, setTimes] = useState([]);
  const [loadTimes, setLoadTimes] = useState(4);
  useEffect(() => {
    dbService
      .collection("times")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const timesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimes(timesArray);
      });
  }, []);
  const LoadMoreTimes = () => {
    setLoadTimes((prevValue) => prevValue + 2);
  };
  // {fruitlist.map(element => <Fruit name={element.name} />)}
  // let numbers = [1, 2, 3, 4, 5];
  // let result = numbers.map((num) => {return num*num});

  return (
    <>
      <div className="first-main">
        <div className="second-main">
          {times.slice(0, loadTimes).map((justinTime) => (
            <Times
              key={justinTime.id}
              timeObj={justinTime}
              isOwner={justinTime.creatorId === userObj.uid}
              times={times}
            />
          ))}
        </div>
        <div className="load-more">
          <button onClick={LoadMoreTimes} className="load-more__btn">
            》》 Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
