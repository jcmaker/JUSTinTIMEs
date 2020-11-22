import React, { useState, useEffect } from "react";
import { dbService } from "fbManager";
import Times from "components/Times";

const JustinTimes = ({ userObj }) => {
  const [justinTime, setJustinTime] = useState("");
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
  const onSubmit = async (event) => {
    // submit하면 document 생성
    event.preventDefault();
    await dbService.collection("times").add({
      text: justinTime,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setJustinTime("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setJustinTime(value);
  };
  console.log(userObj);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          value={justinTime}
          onChange={onChange}
          type="text"
          placeholder="what happened last month Justin??"
          maxLength={1200}
          //   글자수 세는 기능 넣기
          //   띄워쓰기, 한칸비우기 입력 넣기
        />
        <input type="submit" value="TimeUp" />
      </form>
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

export default JustinTimes;
