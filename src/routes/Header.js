import React from "react";
// import dateAndTime from "js/date-and-time";

const Header = ({ userObj }) => {
  //   dateAndTime();
  // 시간 설정 하기

  const date = new Date();

  const datedate = date.getDate();
  const year = date.getFullYear();

  const textMonth = [
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
    "December",
  ];
  const textDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = textMonth[date.getMonth()];
  const day = textDay[date.getDay()];
  return (
    <>
      <div className="header">
        <div className="header__top">
          <div className="header__date">
            <h4 className="header__date_date">{`${day}, ${month} ${datedate}, ${year}`}</h4>
          </div>
          <div className="header__title">
            <h1>
              <a href="/">JUSTinTIMEs</a>
            </h1>
          </div>
          <div className="header__sub">
            <h4>Today's Paper</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
