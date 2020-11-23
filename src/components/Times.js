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
  console.log(timeObj.text.replace("<br>", "\n"));
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
          <h3>{timeObj.title}</h3>
          {timeObj.attachmentUrl && (
            <img
              src={timeObj.attachmentUrl}
              width="auto"
              height="250px"
              alt="img"
            />
          )}
          <h4>{timeObj.text.replace("<br>", "new line plz")}</h4>
          <h6>{timeObj.createdTime}</h6>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Times;
