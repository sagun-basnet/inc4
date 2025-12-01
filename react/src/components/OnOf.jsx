import React, { useState } from "react";

const OnOf = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    document.body.style.backgroundColor = isOn ? "white" : "black";
  };
  return (
    <div className="h-screen w-full grid place-items-center">
      <button
        onClick={handleClick}
        className="p-2 px-4 bg-blue-600 rounded-md cursor-pointer text-white"
      >
        {isOn ? "Off" : "On"}
      </button>
    </div>
  );
};

export default OnOf;
