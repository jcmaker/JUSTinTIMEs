import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbManager";
import Times from "components/Times";
import AppRouter from "components/Router";

const JustinTimes = ({ userObj }) => {
  const [justinTime, setJustinTime] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [attachment, setAttachment] = useState("");
  const [times, setTimes] = useState([]);

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
  const onSubmit = async (event) => {
    // submit하면 document 생성
    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth() + 1;
    const todayDate = date.getDate();
    const uploadDate = thisYear + "/ " + thisMonth + "/ " + todayDate;
    // console.log(thisMonth + "/" + todayDate);
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
  return (
    <div className="justin-times">
      <form onSubmit={onSubmit} className="justin-times__form">
        <input
          type="text"
          placeholder="Main Title"
          value={mainTitle}
          onChange={onChangeTitle}
          className="justin-times__title"
        />
        <textarea
          value={justinTime}
          onChange={onChange}
          type="text"
          placeholder="what happened last month Justin??"
          maxLength={1300}
          //   글자수 세는 기능 넣기
          //   띄워쓰기, 한칸비우기 입력 넣기
          className="justin-times__textarea"
        />
        <h3>
          <span className="textarea-counter">{justinTime.length}</span> / 1300
        </h3>
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="justin-times__file-select"
        />
        {attachment && (
          <div className="justin-times__when-file">
            <img src={attachment} alt="img" className="justin-times__file" />
            <button
              onClick={onDeleteAttachment}
              className="justin-times__cancel-img"
            >
              Cancel Image
            </button>
          </div>
        )}
        <input type="submit" value="Times Upload" className="TimeUp" />
      </form>
      <div>
        {times.map((justinTime) => (
          <Times
            key={justinTime.id}
            timeObj={justinTime}
            isOwner={justinTime.creatorId === userObj.uid}
          />
        ))}
        {times.map((justinTime) => (
          <AppRouter timeObj={justinTime} />
        ))}
      </div>
    </div>
  );
};

export default JustinTimes;
