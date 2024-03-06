import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  const renderLight = (lightColor) => {
    return (
      <div
        className={`light ${color === lightColor ? "on" : ""}`}
        onClick={() => handleClick(lightColor)}
      />
    );
  };

  return (
    <div className="traffic-light">
      <div className="pole">
        {renderLight("red")}
        {renderLight("yellow")}
        {renderLight("green")}
      </div>
      <button onClick={() => handleClick("red")}>Rojo</button>
      <button onClick={() => handleClick("yellow")}>Amarillo</button>
      <button onClick={() => handleClick("green")}>Verde</button>
      <button onClick={() => setColor("purple")}>Púrpura</button>
    </div>
  );
};

export default Home;
