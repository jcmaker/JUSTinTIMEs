import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbManager";
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
    // submit하면 document 생성
    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth() + 1;
    const todayDate = date.getDate();
    const uploadDate = thisYear + "/ " + thisMonth + "/ " + todayDate;
    console.log(thisMonth + "/" + todayDate);
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const timeObj = {
      text: justinTime,
      title: mainTitle,
      createdAt: Date.now(),
      createdTime: uploadDate,
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("times").add(timeObj);
    setJustinTime("");
    setMainTitle("");
    setAttachment("");
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
  const timesCounter = () => {
    // console.log(justinTime.length);
  };

  timesCounter();
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Main Title"
          value={mainTitle}
          onChange={onChangeTitle}
        />
        <h3>{justinTime.length} / 1200</h3>
        <textarea
          value={justinTime}
          onChange={onChange}
          type="text"
          placeholder="what happened last month Justin?? word"
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
