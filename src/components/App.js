import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "fbManager";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit("");
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing. . ."}
      <footer>&copy; JUSTinTIMEs {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
