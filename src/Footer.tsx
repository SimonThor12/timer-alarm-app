function Footer({ setActivePage }: { setActivePage: (page: string) => void }) {
  return (
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
  );
}

export default Footer;
