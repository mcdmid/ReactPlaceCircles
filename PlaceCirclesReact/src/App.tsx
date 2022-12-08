import React, { useState } from "react";
import "./App.css";

type TPoint = {
  x: number; 
  y: number;
};

function App() {
  const [points, setPoints] = useState<TPoint[]>([]);

  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    //console.log(e);
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }

  function handleUndo() {
    const newPoints = [...points];
    newPoints.pop();
    setPoints(newPoints);
  }

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point) => (
          <div
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
            ></div>
        ))}
      </div>
    </>
  );
} 

export default App;