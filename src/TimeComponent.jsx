import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TimeComponent = () => {
  const [time, setTime] = useState("...");

  useEffect(() => {
    const newTime = new Date().toLocaleTimeString();
    setTimeout(() => {
      setTime(() => newTime);
    }, 1000);
  }, [time]);
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default TimeComponent;
