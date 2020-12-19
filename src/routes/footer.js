import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

const Footer = () => {
  return (
    <>
      <div className="footer__">
        <div className="footer__icon">
          <a
            href="https://www.facebook.com/justin.cho.98622"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/jcmaker0627/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a href="https://github.com/jcmaker" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            href="https://wakatime.com/@jcmaker0627"
            target="_blank"
            rel="noreferrer"
          >
            <AccessAlarmsIcon />
          </a>
        </div>
        <div className="footer__shortcut">
          <div className="shortcut__column">
            <h2>Home</h2>
          </div>
          <div className="shortcut__column">
            <h2>About Me</h2>
          </div>
          <div className="shortcut__column">
            <h2>Contact</h2>
          </div>
          <div className="shortcut__column">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="below__footer">
          <div className="below__links">
            <span>&copy;JUSTinTIMEs 2020</span>
            <span>
              <a
                href="https://www.nytimes.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
