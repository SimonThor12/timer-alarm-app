import AlarmAddForm from "./AlarmAddForm";
import AlarmList from "./AlarmList";

function Alarms() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">Alarms</h1>
      <AlarmList />
      <h1 className="text-5xl font-bold">Add Alarm</h1>

      <AlarmAddForm />
    </div>
  );
}

export default Alarms;
