import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ArrowRain.css';

const ArrowRain = ({ count }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const arrows = containerRef.current.querySelectorAll('.arrow');

    arrows.forEach((arrow) => {
      const delay = Math.random() * 3;
      const startX = Math.random() * window.innerWidth;
      const startY = -100;
      const endX = startX + Math.tan(180 * Math.PI / 180) * (window.innerHeight + 200); // move diagonally at 95 deg
      const endY = window.innerHeight + 100;

      gsap.fromTo(
        arrow,
        {
          x: startX,
          y: startY,
          rotation: 95, // point the arrow in the movement direction
          opacity: 1,
        },
        {
          x: endX,
          y: endY,
          duration: 10,
          delay: delay,
          repeat: -1,
          ease: 'none',
        }
      );
    });
  }, []);

  const arrows = Array.from({ length: count }, (_, i) => (
    <div key={i} className="arrow">R 2 C</div>
  ));

  return (
    <div className="arrow-container" ref={containerRef}>
      {arrows}
    </div>
  );
};

export default ArrowRain;
