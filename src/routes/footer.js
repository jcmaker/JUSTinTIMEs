import React from "react";

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
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/jcmaker0627/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/jcmaker" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://wakatime.com/@jcmaker0627"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-clock"></i>
          </a>
        </div>
        <div className="footer__shortcut">
          <div className="shortcut__column">
            <h2>Home</h2>
          </div>
          <div className="shortcut__column">
            <h2>About Me</h2>
            <span>profile photo</span>
            <span>name</span>
            <span>age</span>
            <span>story</span>
          </div>
          <div className="shortcut__column">
            <h2>Contact</h2>
            <span>instagram</span>
            <span>facebook</span>
            <span>github</span>
            <span>wakatime</span>
            <span>Gmail</span>
          </div>
          <div className="shortcut__column">
            <h2>Projects</h2>
            <span>movie-app-2020</span>
            <span>kakaotalk clone</span>
            <span>Lipton</span>
            <span>YouTube clone</span>
          </div>
        </div>
        <div className="below__footer">
          <div className="below__links">
            <span>&copy;JUSTinTIMEs by jcmaker0627 2020</span>
            <span>Contact Me</span>
            <span>
              <a
                href="https://www.nytimes.com/"
                target="_blank"
                rel="noreferrer"
              >
                Cloned site
              </a>
            </span>
            <span>Update date</span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
