import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);

  const toggleBtn = () => {
    setOn((prev) => !prev);
  };

  return <button onClick={toggleBtn}>{on ? "ON" : "OFF"}</button>;
};

export default Toggle;
