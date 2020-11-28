import React, { useState } from "react";
import { dbService, storageService } from "fbManager";

const Times = ({ timeObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTimes, setNewTimes] = useState(timeObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this Times?");
    if (ok) {
      await dbService.doc(`times/${timeObj.id}`).delete();
      await storageService.refFromURL(timeObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`times/${timeObj.id}`).update({
      text: newTimes,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTimes(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <textarea
              type="text"
              placeholder="edit your Times"
              value={newTimes}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Times" />
            <button onClick={toggleEditing}>Cancel</button>
          </form>
        </>
      ) : (
        <>
          <div className="main">
            <span className="times_title">
              <h3>{timeObj.title}</h3>
            </span>
            <span className="times_detail">
              <h6>{timeObj.createdTime}</h6>
              <h6>Justin Cho</h6>
            </span>
            <div className="times_img-text">
              {timeObj.attachmentUrl && (
                <img
                  className="times_image"
                  src={timeObj.attachmentUrl}
                  alt="img"
                />
              )}
              <pre className="times_body">{timeObj.text}</pre>
            </div>
            {isOwner && (
              <>
                <button onClick={onDeleteClick}>Delete</button>
                <button onClick={toggleEditing}>Edit</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Times;
