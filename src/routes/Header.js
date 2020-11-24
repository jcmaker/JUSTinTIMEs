import React from "react";
// import dateAndTime from "js/date-and-time";

const Header = () => {
  //   dateAndTime();
  // 시간 설정 하기

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const datedate = date.getDate();
  const year = date.getFullYear();

  const textMonth = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  const textDay = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  const month = textMonth[date.getMonth()];
  const day = textDay[date.getDay()];
  return (
    <div class="header">
      <div class="header__top">
        <div class="header__date">
          <h4 class="header__date_date">{`${day}, ${month} ${datedate}, ${year}`}</h4>
        </div>
        <div class="header__title">
          <h1>
            <a href="index.html">JUSTinTIMEs</a>
          </h1>
        </div>
        <div class="header__sub">
          <h4>Today's Paper</h4>
        </div>
      </div>
      <div class="header__middle">
        <div class="header__link current-page">
          <a href="index.html">Home</a>
        </div>
        <div class="header__link">
          <a href="aboutme.html">About ME</a>
        </div>
        <div class="header__link">
          <a href="contact.html">Contact</a>
        </div>
        <div class="header__link">
          <a href="projects.html">Projects</a>
        </div>
      </div>
      <div class="header__bottom">
        <div class="topic">
          <div>main topic</div>
        </div>
        <div class="clock">
          <h1 class="clock__time" on>{`${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
          }:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
        </div>
        <div class="weather">
          <div>weather</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
