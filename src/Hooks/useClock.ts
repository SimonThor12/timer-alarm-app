import { useEffect, useState } from "react";
type formattedDate = {
  hours: string;
  minutes: string;
  seconds: string;
};
function useClock() {
  const date = new Date();

  const [clockTime, setClockTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedDateFromRealTime: formattedDate = {
        hours: date.getHours().toString(),
        minutes: date.getMinutes().toString(),
        seconds: date.getSeconds().toString(),
      };
      if (date.getSeconds() < 10) {
        setClockTime(
          formattedDateFromRealTime.hours +
            ":" +
            formattedDateFromRealTime.minutes +
            ":0" +
            formattedDateFromRealTime.seconds
        );
      } else {
        setClockTime(
          formattedDateFromRealTime.hours +
            ":" +
            formattedDateFromRealTime.minutes +
            ":" +
            formattedDateFromRealTime.seconds
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [clockTime]);

  return clockTime;
}

export default useClock;
