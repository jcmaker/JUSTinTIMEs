import React, { useState } from "react";

const JustinTimes = () => {
  const [times, setTimes] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTimes(value);
  };
  return (
    <div>
      <form>
        <textarea
          type="text"
          placeholder="what happened this month Justin??"
          maxLength={1200}
          //   글자수 세는 기능 넣기
        />
        <input type="submit" value="TimeUp" />
      </form>
    </div>
  );
};

export default JustinTimes;
