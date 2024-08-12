import { useState } from "react";
import Timer from "./Timer";
import Clock from "./Clock";
import Alarms from "./Alarms";
import Footer from "./Footer";

export default function ClockApp() {
  const [activePage, setActivePage] = useState("Clock");
  return (
    <div
      data-theme="coffee"
      className="flex justify-center items-center min-h-screen">
      {activePage === "Timer" && <Timer />}
      {activePage === "Clock" && <Clock />}
      {activePage === "Alarms" && <Alarms />}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
