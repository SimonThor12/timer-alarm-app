import StartTimerBtn from "./StartTimerBtn.tsx";
import Button from "./TimeBtn.tsx";
function TimerSetter() {
  return (
    <>
      <p className="mt-4">Set Alarm Here:</p>
      <div className="flex flex-row">
        <Button />
        <Button />
      </div>
      <StartTimerBtn />
    </>
  );
}

export default TimerSetter;
