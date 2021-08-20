import React, { useEffect, useState, useRef } from "react";
import "./App.less";
import { Stage, Layer, Rect, Text, Circle, Line, Group } from "react-konva";

const SCENE_BASE_WIDTH = 800;
const SCENE_BASE_HEIGHT = 600;
const SCENE_MAX_WIDTH = 1000;
const SCENE_MAX_HEIGHT = 600;

const App = () => {
  const [size, setSize] = React.useState({
    width:
      SCENE_MAX_WIDTH > window.innerWidth ? window.innerWidth : SCENE_MAX_WIDTH,
    height:
      SCENE_MAX_HEIGHT > window.innerHeight
        ? window.innerWidth
        : SCENE_MAX_HEIGHT,
  });

  const [stateColor, setStateColor] = useState<string>("red");
  const stateRef = useRef(stateColor);
  stateRef.current = stateColor;

  useEffect(() => {
    const timer = setInterval(function () {
      setStateColor(stateRef.current === "red" ? "green" : "red");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkSize = () => {
      setSize({
        width:
          SCENE_MAX_WIDTH > window.innerWidth
            ? window.innerWidth
            : SCENE_MAX_WIDTH,
        height:
          SCENE_MAX_HEIGHT > window.innerHeight
            ? window.innerWidth
            : SCENE_MAX_HEIGHT,
      });
    };

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const scale = size.width / SCENE_BASE_WIDTH;

  return (
    <div className="app">
      <Stage
        width={size.width}
        height={size.height}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          <Rect
            id="block1"
            x={10}
            y={40}
            width={220}
            height={300}
            fill="lightblue"
            opacity={1.0}
            stroke="black"
            strokeWidth={0.5}
            dash={[10, 10]}
            shadowBlur={10}
            shadowOpacity={0.7}
          />
          <Text
            id="test1"
            x={10}
            y={40}
            width={220}
            height={290}
            fill="black"
            text="Block description"
            fontSize={15}
            align="center"
            opacity={0.7}
            verticalAlign="bottom"
          />
          <Rect
            id="test1"
            x={20}
            y={50}
            width={200}
            height={50}
            fill={stateColor}
            stroke="black"
            strokeWidth={1}
            shadowBlur={6}
            shadowOpacity={0.6}
          />
          <Text
            id="test1"
            x={20}
            y={50}
            width={200}
            height={50}
            fill="white"
            text="Some text on canvas"
            fontSize={15}
            align="center"
            verticalAlign="middle"
            onClick={(event) => {
              alert(`${event.target.attrs.id} clicked`);
            }}
          />
          <Rect
            id="test2"
            x={20}
            y={120}
            width={200}
            height={50}
            fill="orange"
            stroke="black"
            strokeWidth={1.0}
            shadowBlur={6}
            shadowOpacity={0.6}
            onClick={(event) => {
              alert(`${event.target.attrs.id} clicked`);
            }}
          />

          <Rect
            x={320}
            y={50}
            width={200}
            height={50}
            fill={stateColor}
            stroke="black"
            strokeWidth={1}
            shadowBlur={6}
            shadowOpacity={0.6}
          />
          <Text
            id="test3"
            x={320}
            y={50}
            width={200}
            height={50}
            fill="white"
            text="Item 3"
            fontSize={15}
            align="center"
            verticalAlign="middle"
            onClick={(event) => {
              alert(`${event.target.attrs.id} clicked`);
            }}
          />

          <Line points={[220, 75, 320, 75]} stroke="black" strokeWidth={2} />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
