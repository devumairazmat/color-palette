import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const Dot = ({ color }) => {
    const Style = {
      height: 25,
      width: 25,
      margin: "0px 10px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block",
    };
    return <div style={Style}></div>;
  };
  return (
    <>
      <Button className="m-4" variant="dark">
        Add New Color
      </Button>
      <ol className="m-4 p-4">
        <li className="m-2 "><a href="">edit</a><Dot color="#f00" /> Red</li>
        <li className="m-2 "><a href="">edit</a><Dot color="#0f0" /> Green</li>
        <li className="m-2 "><a href="">edit</a><Dot color="#00f" /> Blue</li>
      </ol>
    </>
  );
}

export default App;
