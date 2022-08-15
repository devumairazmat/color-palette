import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Dot from "./Dot";
import db from "./firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { addNew, editColor, delColor, delQuery } from "./Utils";

function App() {
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);

  useEffect(() => {
    const collectionRef = collection(db, "color");
    const q = query(collectionRef,orderBy("timestamp","asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  return (
    <>
      {/* Add Color */}
      <Button className="m-4" variant="dark" onClick={addNew}>
        Add Color
      </Button>
      <Button className="m" variant="danger" onClick={delQuery}>
        Delete Colors
      </Button>
      <ol className="m-4 p-4">
        {colors.map((color) => (
          <li key={color.id} className="m-2 ">
            {/* Edit color*/}
            <Button
              variant="primary"
              size="sm"
              className="m-2"
              onClick={() => {
                editColor(color.id);
              }}
            >
              Edit
            </Button>
            {/* Delete Color */}
            <Button
              variant="danger"
              size="sm"
              className="m-2"
              onClick={() => {
                delColor(color.id);
              }}
            >
              Delete
            </Button>
            <Dot color={color.value} />{" "}
            <b>
              {" "}
              <u>{color.name}</u>{" "}
            </b>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
