import React, { useState, useEffect } from "react";
import { dbService } from "fbManager";
import Times from "components/Times";

const JustinTimes = ({ userObj }) => {
  const [justinTime, setJustinTime] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [times, setTimes] = useState([]);
  const [attachment, setAttachment] = useState("");
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
    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth() + 1;
    const todayDate = date.getDate();
    const uploadDate = thisYear + "/ " + thisMonth + "/ " + todayDate;
    console.log(thisMonth + "/" + todayDate);
    // submit하면 document 생성
    event.preventDefault();
    await dbService.collection("times").add({
      text: justinTime,
      title: mainTitle,
      createdAt: uploadDate,
      creatorId: userObj.uid,
    });
    setJustinTime("");
    setMainTitle("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setJustinTime(value);
  };
  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setMainTitle(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onDeleteAttachment = () => setAttachment(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Main Title"
          value={mainTitle}
          onChange={onChangeTitle}
        />
        <textarea
          value={justinTime}
          onChange={onChange}
          type="text"
          placeholder="what happened last month Justin??"
          width="600px"
          height="1200px"
          maxLength={1200}
          //   글자수 세는 기능 넣기
          //   띄워쓰기, 한칸비우기 입력 넣기
          style={{ width: "500px", height: "600px" }}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="TimeUp" />
        {attachment && (
          <div>
            <img src={attachment} width="auto" height="400px" alt="img" />
            <button onClick={onDeleteAttachment}>Cancel Image</button>
          </div>
        )}
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
