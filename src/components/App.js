import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  let x = 0,
    y = 0;
  const [ballPosition, setBallPosition] = useState({
    left: x,
    top: y
  });

  const start = () => {
    setRenderBall(true);
    document.addEventListener("keydown", (el) => handleKey(el));
  };

  const reset = () => {
    setBallPosition({
      left: 0,
      top: 0
    });
    x = 0;
    y = 0;
    setRenderBall(false);
    document.removeEventListener("keydown", (el) => handleKey(el));
  };

  const handleKey = (el) => {
    if (el.keyCode === 37) x = x - 5;
    if (el.keyCode === 38) y = y - 5;
    if (el.keyCode === 39) x = x + 5;
    if (el.keyCode === 40) y = y + 5;
    setBallPosition({
      top: y,
      left: x
    });
  };

  const renderChoice = () => {
    if (renderBall)
      return (
        <div
          className="ball"
          style={{
            top: ballPosition.top + "px",
            left: ballPosition.left + "px"
          }}
        ></div>
      );
    else
      return (
        <button className="start" onClick={start}>
          start
        </button>
      );
  };

  return (
    <div className="playground">
      {renderChoice()}
      <button onClick={() => reset()} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
