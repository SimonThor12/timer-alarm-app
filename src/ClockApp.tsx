import { useState } from "react";
import Timer from "./Timer";
import Clock from "./Clock";
import Alarms from "./Alarms";

export default function ClockApp() {
  const [activePage, setActivePage] = useState("Alarms");
  return (
    <div
      data-theme="coffee"
      className="min-h-screen flex justify-center items-center">
      {activePage === "Timer" && <Timer />}
      {activePage === "Clock" && <Clock />}
      {activePage === "Alarms" && <Alarms />}
      <nav
        className="btm-nav"
        data-theme="coffee">
        <button
          className="text-white"
          onClick={() => setActivePage("Clock")}>
          Clock
        </button>
        <button
          className="text-white"
          onClick={() => setActivePage("Timer")}>
          Timer
        </button>
        <button
          className="text-white"
          onClick={() => setActivePage("Alarms")}>
          Alarms
        </button>
      </nav>
    </div>
  );
}
