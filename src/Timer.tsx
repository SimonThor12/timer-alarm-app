import TimerSetter from "./TimerSetter.tsx";

function Timer() {
  return (
    <>
      <div
        data-theme="dark"
        className="flex flex-col items-center justify-center min-h-screen bg-black-100">
        <h1 className="text-4xl text-center">Time-To-Time</h1>
        <TimerSetter />
      </div>
    </>
  );
}

export default Timer;
