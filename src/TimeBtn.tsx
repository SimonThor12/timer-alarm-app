import { useState } from "react";

function TimeBtn() {
  const [value, setValue] = useState(0);

  function OnTimeBtnClick() {
    setValue(value + 1);
  }

  return (
    <>
      <button
        onClick={OnTimeBtnClick}
        className="btn bg-warning mt-4 text-black m-2   ">
        {value}
      </button> 
    </>
  );
}

export default TimeBtn;
