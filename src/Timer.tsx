import { useState, useEffect, SetStateAction } from "react";
import TimerDisplay from "./TimerDisplay";
import ControlButtons from "./ControlButtons";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [input, setInput] = useState("");

  function fetchVideoOnZeroTime(time: number) {
    if (time == 0 && isTicking) {
      window.location.href =
        "https://i.makeagif.com/media/12-06-2021/x9kVf3.gif";
    }
  }

  useEffect(() => {
    if (timeLeft > 0 && isTicking) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
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
    // Reset the timer to the input value if it's set
    if (input) {
      setTimeLeft(parseInt(input));
      return;
    }
  };

  const setTimer = () => {
    const time = parseInt(input);
    if (!isNaN(time) && time > 0 && time <= 60) { 
      setTimeLeft(time); // Set the timer to the user's input
      setIsTicking(false); // Stop the timer if it's running
    }
  };

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }): void {
    setInput(event.target.value);
  }

  return (
    <div
      data-theme="coffee"
      className="flex flex-col items-center">
      <TimerDisplay timeLeft={timeLeft} />
      <ControlButtons
        isTicking={isTicking}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />

      <input
        value={input}
        onChange={handleInputChange}
        className="text-center mt-4 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform focus:scale-105"
        placeholder="Set timer here"
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
