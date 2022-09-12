import React from "react";
import { useState, useRef } from "react";
import { Box } from "@mui/material";

import "./slide.css";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "red",
  "while",
  "green",
  "yellow",
];

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    setTimeout(
      () =>
        setIndex((prevIndex) => {
          if (prevIndex < 2) {
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1;
          } else {
            prevIndex = 0;
          }
          return prevIndex;
        }),
      1000
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  console.log(index);
  return (
    <Box className="slideshow">
      <Box
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <Box className="slide" key={index} style={{ backgroundColor }}></Box>
        ))}
      </Box>
    </Box>
  );
}
export default Slideshow;
