import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbManager";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <div>JUSTinTIMEs</div>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing. . ."
      )}
      <footer>&copy; JUSTinTIMEs {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
