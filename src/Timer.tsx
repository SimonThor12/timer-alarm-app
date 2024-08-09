import {
  useState,
  useEffect,
  ReactEventHandler,
  ReactElement,
  SetStateAction,
} from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTicking, setIsTicking] = useState(false);
  const [input, setInput] = useState("");

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
        min="0"
        max="60"
        value={input}
        onChange={handleInputChange}
        type="number"
        className="text-center mt-4"
        placeholder="Set timer here"></input>
      <button
        className="btn "
        onClick={setTimer}>
        Set timer
      </button>
    </div>
  );
}

export default Timer;
