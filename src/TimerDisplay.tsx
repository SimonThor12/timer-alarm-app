type TimerDisplayProps = {
  timeLeft: number;
};

const TimerDisplay = ({ timeLeft }: TimerDisplayProps) => {
  return (
    <h1
      className="mt-4 text-6xl font-bold text-white"
      style={{
        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7), 0 0 15px #FF8C00",
      }}>
      {timeLeft}
    </h1>
  );
};

export default TimerDisplay;
