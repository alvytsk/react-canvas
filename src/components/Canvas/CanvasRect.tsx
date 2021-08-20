import React from "react";
import { Rect, Text } from "react-konva";

export enum Status {
  Normal = "green",
  Fault = "red",
}

interface CanvasRectProps {
  idName: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text: string;
  fontSize?: number;
  status: string;
  onClick?: (event: any) => void;
}

const CanvasRect: React.FC<CanvasRectProps> = ({
  ...props
}: CanvasRectProps) => {
  return (
    <React.Fragment>
      <Rect
        id="block1"
        x={props.x}
        y={props.y}
        width={"width" in props ? props.width : 200}
        height={"height" in props ? props.height : 50}
        opacity={1.0}
        fill={props.status}
        stroke="black"
        strokeWidth={1}
      />
      <Text
        id={props.idName}
        x={props.x}
        y={props.y}
        width={"width" in props ? props.width : 200}
        height={"height" in props ? props.height : 50}
        fill="white"
        text={props.text}
        fontSize={"fontSize" in props ? props.fontSize : 15}
        align="center"
        verticalAlign="middle"
        opacity={0.9}
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

export default CanvasRect;
