import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import ControlButtons from "./ControlButtons";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [input, setInput] = useState("");

  function fetchVideoOnZeroTime(time: number) {
    if (time === 0 && isTicking) {
      window.location.href =
        "https://i.makeagif.com/media/12-06-2021/x9kVf3.gif";
    }
  }

  useEffect(() => {
    if (timeLeft > 0 && isTicking) {
      const intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
    fetchVideoOnZeroTime(timeLeft);
  }, [timeLeft, isTicking]);

  function toggleTimer() {
    setIsTicking(!isTicking);
  }

  const resetTimer = () => {
    setIsTicking(false);
    if (input) {
      const [minutes, seconds] = input.split(":").map(Number);
      setTimeLeft(minutes * 60 + seconds);
    }
  };

  const setTimer = () => {
    const [minutes, seconds] = input.split(":").map(Number);
    const time = minutes * 60 + seconds;
    if (time > 0) {
      setTimeLeft(time);
      setIsTicking(false);
    }
  };

  return (
    <div
     
      className="flex flex-col items-center">
      <TimerDisplay timeLeft={timeLeft} />
      <ControlButtons
        isTicking={isTicking}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />

      <input
        type="time"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-center mt-4 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform focus:scale-105"
      />

      <button
        className="btn mt-4"
        onClick={setTimer}>
        Set timer
      </button>
    </div>
  );
}

export default Timer;
