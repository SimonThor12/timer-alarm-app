import { useState, useEffect, SetStateAction } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTicking, setIsTicking] = useState(false);
  const [input, setInput] = useState("");

  function fetchVideoOnZeroTime(time: number) {
    if (time == 0) {
      window.location.href = "https://www.youtube.com/watch?v=xm3YgoEiEDc";
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
    setTimeLeft(60); // Reset to the initial value
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
      data-theme="dark"
      className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-center">Time-To-Time</h1>
      <h2 className="mt-4">Time left: {timeLeft}</h2>
      <button
        className="btn bg-warning mt-4 text-black"
        onClick={toggleTimer}>
        {isTicking ? "Pause" : "Start"}
      </button>
      <button
        className="btn bg-warning mt-4 text-black"
        onClick={resetTimer}>
        Reset
      </button>
      <input
        value={input}
        onChange={handleInputChange}
        type="number"
        className="text-center mt-4"
        placeholder="Set timer here"></input>
      <button
        className="btn mt-4"
        onClick={setTimer}>
        Set timer
      </button>
    </div>
  );
}

export default Timer;
