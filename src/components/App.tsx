import React from "react";
import "./App.less";
import Canvas from "./Canvas";

const App = () => {
  function roundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

  const draw = (ctx: any, frameCount: number) => {
    // console.log(ctx, frameCount);

    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = "#ff0000";
    // ctx.beginPath();
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    // ctx.fill();

    roundedRect(ctx, 12, 12, 200, 100, 5);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "20px serif";
    ctx.fillText("Hello world", 62, 95);
  };

  return (
    <div className="app">
      <p />
      <Canvas draw={draw} />
    </div>
  );
};

export default App;
