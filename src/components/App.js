import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  const start = () => {
    setRenderBall(true);
    document.addEventListener("keydown", (el) => handleKey(el));
  };

  const reset = () => {
    setX(0);
    setY(0);
    setRenderBall(false);
    document.removeEventListener("keydown", (el) => handleKey(el));
  };

  const handleKey = (el) => {
    if (el.keyCode === 37) setX(x - 5);
    if (el.keyCode === 38) setY(y - 5);
    if (el.keyCode === 39) setX(x + 5);
    if (el.keyCode === 40) setY(y + 5);
  };

  const renderChoice = () => {
    if (renderBall)
      return (
        <div className="ball" style={{ right: y + "px", left: x + "px" }}></div>
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
      <br />
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
