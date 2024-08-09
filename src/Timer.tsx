import { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTicking, setIsTicking] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && isTicking) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft, isTicking]);

  function toggleTimer() {
    setIsTicking(!isTicking);
  }

  const resetTimer = () => {
    setTimeLeft(60); // Reset to the initial value
  };

  return (
    <div
      data-theme="dark"
      className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-center">Time-To-Time</h1>
      <h2 className="mt-4">Time left: {timeLeft}</h2>
      <button
        className="btn bg-warning mt-4 text-black"
        onClick={toggleTimer}>
        Play/Pause
      </button>
      <button
        className="btn bg-warning mt-4 text-black"
        onClick={resetTimer}>
        Reset
      </button>
      <input
        className="text-center mt-4"
        placeholder="Set timer here"></input>
    </div>
  );
}

export default Timer;
