import TimerSetter from "./TimerSetter.tsx";

function Timer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
        <h1 className="text-4xl text-center">Time-To-Time</h1>
        <TimerSetter />
        <button className="btn">Click me!</button>
      </div>
    </>
  );
}

export default Timer;
