import { useState } from "react";
import AlarmAddForm from "./AlarmAddForm";
import AlarmList from "./AlarmList";

function Alarms() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Add Alarm</h1>
      <AlarmAddForm onIsAdded={setIsAdded} />

      <h1 className=" m-4 text-5xl font-bold">Alarms</h1>
      <AlarmList isRenderTime={isAdded} />
    </div>
  );
}

export default Alarms;
