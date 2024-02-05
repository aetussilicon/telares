import { useState } from "react";

function ParallaxImage({ imageUrl, altText}) {
    const [positionX, setPositionX] = useState(0);

    // Função para lidar com o evento onMouseMove
    const handleMouseMove = (e) => {
      const speed = 5;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      setPositionX(-x);
    };
  
    return (
      <div
        className="selectBlock"
        onMouseMove={handleMouseMove}
        style={{ backgroundImage: `url(${imageUrl})`, backgroundPositionX: `${positionX}px` }}
        alt={altText}
      ></div>
    );
  }

  export default ParallaxImage;