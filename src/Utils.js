import React from "react";
import { collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

  // Btn Function Add Color To Collection
export const addNew = async () => {
    const collectionRef = collection(db,"color");
    const name = prompt("Add new Color");
    const value = prompt("Add value of Color");
    const payload ={ name ,value}
    const docRef = await addDoc(collectionRef,payload);
    console.log("The new Color Id is:",docRef.id)
  }

  // Edit Color Func Added to Collection
  export const editColor = async (id) => {
    const name = prompt("Add new Color");
    const value = prompt("Add value of Color");
    const docRef = doc(db,"color",id);
    const payload ={ name ,value}
    setDoc (docRef, payload)
  }

  export const delColor = async (id) => {
    const docRef = doc(db,"color",id);
    await deleteDoc (docRef);
  }
