import { useState } from "react";
import useClock from "./Hooks/useClock";

function Clock() {
  const time = useClock();
  
  return (
    <div>
      <h1
        className="flex items-center flex-col justify-center text-6xl font-bold text-white min-h-screen"
        style={{
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7), 0 0 15px #646ee4",
        }}>
        {time}
      </h1>{" "}
    </div>
  );
}

export default Clock;
