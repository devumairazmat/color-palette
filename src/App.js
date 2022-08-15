import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import db from "./firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, doc ,addDoc  } from "firebase/firestore";

const Dot = ({ color }) => {
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

function App() {
  
  const [colors, setColors] = useState([{name:"Loading...",id:"initial"}]);  
  useEffect(
    () =>
      onSnapshot(collection(db, "color"), (snapshot) => {
        setColors(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
      }),
    []
  );

  const addNew = async () => {
    const collectionRef = collection(db,"color");
    const name = prompt("Add new Color");
    const value = prompt("Add value of Color");
    const payload ={ name ,value}
    await addDoc(collectionRef,payload);
  }

  return (
    <>
      <Button className="m-4" variant="dark" onClick={addNew}>
        Add Color
      </Button>
      <ol className="m-4 p-4">
        {colors.map((color) => (
          <li key={color.id} className="m-2 ">
            <a href="">edit</a>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
