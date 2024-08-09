import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const dateObj = new Date();

      const currentTime = dateObj.toLocaleTimeString();

      setTime(currentTime);
    }, 1000);
  });

  return (
    <>
      <h1 className="items-center justify-center text-center">{time}</h1>
    </>
  );
}

export default Clock;
