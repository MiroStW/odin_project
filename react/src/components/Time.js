import React, { useEffect, useState } from "react";

const Time = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let timerID = setInterval(() => {
      setTimer();
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  const setTimer = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="time">
      <p>It is {time}</p>
    </div>
  );
};

export default Time;
