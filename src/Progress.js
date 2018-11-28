import React from "react";

export default ({
  height = 2,
  width = 0,
  color = "#5b9aff",
  duration = 300,
  easing = "ease-out",
  position = "top",
  completedColor = "#40ce80"
  padding = "0 0 0 0"
}) => (
  <div
    style={{
      height,
      width: "%",
      backgroundColor: width === 100 ? completedColor : color,
      transitionProperty: "all",
      transitionDuration: duration + "ms",
      transitionTimingFunction: easing,
      position: "fixed",
      top: position === "top" ? 0 : "auto",
      left: 0,
      bottom: position === "bottom" ? 0 : "auto"
      padding: "0 0 0 0"

    }}
  />
);
