import React from "react";
export default function Dot({ color })  {
    const Style = {
      height: 15,
      width: 15,
      margin: "0px 10px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block",
    };
    return <div style={Style}></div>;
  };