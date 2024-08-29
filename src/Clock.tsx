import { useState, useEffect } from "react";

function Clock() {
  const time = useCurrentTime();

  function useCurrentTime() {
    const dateObj = new Date();
    const currentTime = dateObj.toLocaleTimeString();
    const [time, setTime] = useState(currentTime);

    function updateTime() {
      setInterval(() => {
        const newDate = new Date();
        setTime(newDate.toLocaleTimeString());
      }, 1000);
    }

    updateTime();

    return time;
  }

  return (
    <div>
      <h1
        className="flex items-center flex-col justify-center text-6xl font-bold text-white min-h-screen"
        style={{
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7), 0 0 15px #FF8C00",
        }}>
        {time}
      </h1>{" "}
    </div>
  );
}

export default Clock;
