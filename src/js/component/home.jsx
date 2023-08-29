import React, { useState } from "react";

const TrafficLight = () => {
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  const handleRedClick = () => {
    setRed(true);
    setYellow(false);
    setGreen(false);
  };

  const handleYellowClick = () => {
    setRed(false);
    setYellow(true);
    setGreen(false);
  };

  const handleGreenClick = () => {
    setRed(false);
    setYellow(false);
    setGreen(true);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "80px",
        height: "180px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: red ? "red" : "darkorange",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: red ? "0 0 10px red" : "none",
        }}
        onClick={handleRedClick}
      ></div>
      <div
        style={{
          backgroundColor: yellow ? "yellow" : "yellow",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: yellow ? "0 0 10px yellow" : "none",
        }}
        onClick={handleYellowClick}
      ></div>
      <div
        style={{
          backgroundColor: green ? "green" : "lightgreen",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: green ? "0 0 10px green" : "none",
        }}
        onClick={handleGreenClick}
      ></div>
    </div>
  );
};

export default TrafficLight;
