import React, { useEffect, useState, useRef } from "react";
import "./App.less";
import { Stage, Layer, Rect, Text, Circle, Line, Group } from "react-konva";

const App = () => {
  const [stateColor, setStateColor] = useState<string>("red");
  const stateRef = useRef(stateColor);
  stateRef.current = stateColor;

  useEffect(() => {
    const timer = setInterval(function () {
      setStateColor(stateRef.current === "red" ? "green" : "red");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            id="test1"
            x={20}
            y={50}
            width={200}
            height={50}
            fill={stateColor}
            shadowBlur={6}
            shadowOpacity={0.6}
            scaleX={1.0}
            scaleY={1.0}
            onClick={(event) => {
              alert(`${event.target.attrs.id} clicked`);
            }}
          />
          <Text
            x={24}
            y={55}
            fill="white"
            text="Some text on canvas"
            fontSize={15}
          />
          <Rect
            id="test2"
            x={20}
            y={120}
            width={200}
            height={50}
            fill="orange"
            shadowBlur={6}
            shadowOpacity={0.6}
            scaleX={1.0}
            scaleY={1.0}
            onClick={(event) => {
              alert(`${event.target.attrs.id} clicked`);
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
