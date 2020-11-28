import React, { useState } from "react";
import { authService } from "fbManager";
import { useHistory } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState("");
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  // const getMyTimes = async () => {
  //   const times = await dbService
  //     .collection("times")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt")
  //     .get();
  //   console.log(times.docs.map((doc) => doc.data()));
  // };
  // useEffect(() => {
  //   getMyTimes();
  // });
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  console.log(userObj);
  return (
    <>
      <div className="profile">
        <div className="profile__main">
          <img src={userObj.photoURL} alt="" className="profile__main-img" />
          <span className="profile__main-text">
            <h2>{userObj.displayName}</h2>
          </span>
        </div>
        <div className="profile__form">
          <form onSubmit={onSubmit} className="profile__form-form">
            <input
              type="text"
              placeholder={userObj.displayName}
              onChange={onChange}
              value={newDisplayName}
              className="profile__form-text"
            />
            <input
              type="submit"
              value="Update my name"
              className="profile__form-btn"
            />
          </form>
          <button onClick={onLogOutClick} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
