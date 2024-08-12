import { useState } from "react";
import AlarmAddForm from "./AlarmAddForm";
import AlarmList from "./AlarmList";

function Alarms() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="flex flex-col items-center mb-16 ">
      <h1 className="text-4xl font-bold">Add Alarm</h1>
      <AlarmAddForm onIsAdded={setIsAdded} />

      <h1 className="text-5xl font-bold m-4">Alarms</h1>
      <AlarmList isRenderTime={isAdded} />
    </div>
  );
}

export default Alarms;
