import { useState } from "react";
import Timer from "./Timer";
import Clock from "./Clock";
import Alarms from "./Alarms";
import Footer from "./Footer";

function App() {
  const [activePage, setActivePage] = useState("Clock");
  return (
    <div
      data-theme="dark"
      className="flex flex-col min-h-screen">
      {/* Content Area */}
      <div className="flex-grow flex justify-center items-center">
        {activePage === "Timer" && <Timer />}
        {activePage === "Clock" && <Clock />}
        {activePage === "Alarms" && <Alarms />}
      </div>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
