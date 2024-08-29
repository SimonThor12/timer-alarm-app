import { useEffect, useState } from "react";

function AlarmList(isRenderTime: any) {
  const [alarmList, setAlarmList] = useState<Alarm[]>([]);

  type Alarm = {
    id: string;
    description: string;
    time: string;
  };

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
  }, [isRenderTime, alarmList]);

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
      <ul className="flex flex-wrap justify-center">
        {alarmList.map((alarm) => (
          <li
            className="card w-64 shadow-x2 outline m-2"
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
