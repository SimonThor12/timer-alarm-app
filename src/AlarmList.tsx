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
  }

  return (
    <div>
      <ul className="flex flex-wrap">
        {alarmList.map((alarm) => (
          <li
            className="card bg-base-100 w-96 shadow-xl outline m-2"
            key={alarm.id}>
            <div className="card-body items-center text-center">
              <div className="justify-center">{alarm.description}</div>
              <h2 className="font-bold">{alarm.time}</h2>
            </div>
            <div className="card-actions justify-end ">
              <button className="badge badge-outline m-2">Edit</button>
              <button
                onClick={() => deleteData(alarm.id)}
                className="badge badge-outline m-2">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlarmList;
