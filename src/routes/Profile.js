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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={userObj.displayName}
          onChange={onChange}
          value={newDisplayName}
        />
        <input type="submit" value="Update my name" />
      </form>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};

export default Profile;
