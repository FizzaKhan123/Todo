import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(10);
  const handleChange = (event) => {
    let value = event.target.value;
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    console.log("value", value);
    setProgress(value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "100px",
        alignItems: "center",
      }}
    >
      <progress value={progress} max={100} />
      <input
        type="number"
        onChange={(e) => handleChange(e)}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default ProgressBar;
