import { useEffect, useState } from "react";

function AlarmList() {
  type Alarm = {
    id: string;
    description: number;
    time: number;
  };

  const [alarmList, setAlarmList] = useState<Alarm[]>([]);

  async function getData() {
    const url = "http://localhost:5066/Alarms";
    try {
      await fetch(url).then((response) =>
        response.json().then((data) => {
          setAlarmList(data);
        })
      );
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  

  async function deleteData(id: string) {
    const url = "http://localhost:5066/Alarms/" + id;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getData();

    alert("Alarm deleted");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Alarms</h1>
      <ul className="flex flex-col">
        {alarmList.map((alarm) => (
          <li key={alarm.id}>
            {alarm.description} - {alarm.time}
            <button
              onClick={() => deleteData(alarm.id)}
              className="btn ml-4">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlarmList;
