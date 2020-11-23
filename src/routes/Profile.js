import React, { useEffect } from "react";
import { authService, dbService } from "fbManager";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyTimes = async () => {
    const times = await dbService
      .collection("times")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    console.log(times.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyTimes();
  }, []);
  console.log(userObj);
  return (
    <>
      <form>
        <input type="text" placeholder={userObj.displayName} />
      </form>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};

export default Profile;
