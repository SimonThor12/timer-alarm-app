type TimerDisplayProps = {
  timeLeft: number;
};

const TimerDisplay = ({ timeLeft }: TimerDisplayProps) => {
  return (
    <h1 className="mt-4 text-8xl font-bold text-white shadow-lg">{timeLeft}</h1>
  );
};

export default TimerDisplay;
