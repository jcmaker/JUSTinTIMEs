import React, { useState, useEffect } from "react";
import { dbService } from "fbManager";

const JustinTimes = () => {
  const [thetime, setTheTime] = useState("");
  const [times, setTimes] = useState([]);
  const getTimes = async () => {
    const dbTimes = await dbService.collection("times").get();
    dbTimes.forEach((document) => {
      const timesObject = {
        ...document.data(),
        id: document.id,
      };
      setTimes((prev) => [timesObject, ...prev]);
    });
  };
  useEffect(() => {
    getTimes();
  }, []);
  const onSubmit = async (event) => {
    // submit하면 document 생성
    event.preventDefault();
    await dbService.collection("times").add({
      thetime,
      createdAt: Date.now(),
    });
    setTheTime("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTheTime(value);
  };
  console.log(times);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          value={times}
          onChange={onChange}
          type="text"
          placeholder="what happened last month Justin??"
          maxLength={1200}
          //   글자수 세는 기능 넣기
        />
        <input type="submit" value="TimeUp" />
      </form>
      <div>
        {times.map((thetime) => {
          <div key={thetime.id}>
            <h4>{thetime.thetime}</h4>
          </div>;
        })}
      </div>
    </div>
  );
};

export default JustinTimes;
