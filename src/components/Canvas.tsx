import React, { useRef, useEffect } from "react";
import useCanvas from "./useCanvas";

//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

const Canvas = (props: any | undefined) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  useEffect(() => {
    console.log(draw);
  }, draw);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
