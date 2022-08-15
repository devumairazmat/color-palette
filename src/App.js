import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Dot from "./Dot";
import db from "./firebase";
import { useEffect, useState } from "react";
import { onSnapshot , collection} from "firebase/firestore";
import { addNew , editColor} from "./Utils";

function App() {
  const [colors, setColors] = useState([{name:"Loading...",id:"initial"}]);  
  useEffect(
    () =>
      onSnapshot(collection(db, "color"), (snapshot) => {
        setColors(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
      }),
    []
  );
  
  return (
    <>
      <Button className="m-4" variant="dark" onClick={addNew}>
        Add Color
      </Button>
      <ol className="m-4 p-4">
        {colors.map((color) => (
          <li key={color.id} className="m-2 ">
            <a href="#" onClick={() => {editColor(color.id)}}>Edit Color</a>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
