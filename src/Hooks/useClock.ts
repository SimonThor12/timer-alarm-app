import { useEffect, useState } from "react";
function useClock() {
  const date = new Date();

  const [clockTime, setClockTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedDateFromRealTime = date.toLocaleTimeString();
      setClockTime(formattedDateFromRealTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [clockTime]);

  return clockTime;
}

export default useClock;
