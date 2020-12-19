import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";
import JustinTimes from "routes/JustinTimes";
import Contact from "routes/Contact";
import AboutMe from "routes/AboutMe";
import Projects from "routes/Projects";

// import { dbService } from "fbManager";

const AppRouter = ({ refreshUser, isLoggedIn, userObj, timeObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Route exact path="/jcJustinTimes0627">
              <JustinTimes userObj={userObj} />
            </Route>
            <Route exact path="/ContactJustin">
              <Contact />
            </Route>
            <Route exact path="/AboutJustin">
              <AboutMe />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            {/* <Route exact path={`/${timeObj.id}`}>
              <AnchorTimes />
            </Route> */}
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
