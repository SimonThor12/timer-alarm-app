import { useState } from "react";
import Timer from "./Timer";
import Clock from "./Clock";

export default function ClockApp() {
  const [activePage, setActivePage] = useState("Timer");
  return (
    <div
      data-theme="coffee"
      className="min-h-screen">
      {activePage === "Timer" && <Timer />}
      {activePage === "Clock" && <Clock />}
      <nav
        className="btm-nav"
        data-theme="coffee">
        <button
          className="text-white"
          onClick={() => setActivePage("Timer")}>
          Timer
        </button>
        <button
          className="text-white"
          onClick={() => setActivePage("Clock")}>
          Clock
        </button>
      </nav>
    </div>
  );
}
