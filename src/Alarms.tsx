import AlarmAddForm from "./AlarmAddForm";
import AlarmList from "./AlarmList";

function Alarms() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AlarmList />
      <AlarmAddForm />
    </div>
  );
}

export default Alarms;
