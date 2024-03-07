import React, { useState } from "react";


const Home = () => {
  const [color, setColor]= useState("")
  const colors = ["red", "yellow", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeLight = (newColor) => {
   setColor (newColor);
  };

  const toggleColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    setColor(colors[currentColorIndex]);
  };

  return (   
    <div className="traffic-light-container-fluid text-center">
      <div className="traffic-light">
        <button className={`light red ${color === 'red' ? 'active' : ''}`} onClick={() => changeLight('red')}></button>
        <button className={`light yellow ${color === 'yellow' ? 'active' : ''}`} onClick={() => changeLight('yellow')}></button>
        <button className={`light green ${color === 'green' ? 'active' : ''}`} onClick={() => changeLight('green')}></button>
      </div>
      <br />
      <button className="blue-button" onClick={toggleColor}>Cambiar Color</button>
    </div>
  );
};

export default Home;
