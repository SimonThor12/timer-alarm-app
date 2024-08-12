type Props = {
  isTicking: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
};

function ControlButtons({ isTicking, toggleTimer, resetTimer }: Props) {
  return (
    <div className="flex m-2">
      <button
        className="btn mr-2"
        onClick={toggleTimer}>
        {isTicking ? "Pause" : "Start"}
      </button>
      <button
        className="btn ml-2"
        onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;
