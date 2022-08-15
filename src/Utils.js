import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  serverTimestamp
} from "firebase/firestore";
import db from "./firebase";


// Btn Function Add Color To Collection
export const addNew = async () => {
  const collectionRef = collection(db, "color");
  const name = prompt("Add new Color");
  const value = prompt("Add value of Color");
  const payload = { name, value , timestamp: serverTimestamp() };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new Color Id is:", docRef.id);
  prompt("The new Color  is Added", name);
};

// Edit Color Func Added to Collection
export const editColor = async (id) => {
  const name = prompt("Add new Color");
  const value = prompt("Add value of Color");
  const docRef = doc(db, "color", id);
  const payload = { name, value ,timestamp: serverTimestamp() };
  updateDoc(docRef, payload);
  alert("The  Color  is Added", name);
};

// Delete the color by its id
export const delColor = async (id) => {
  const docRef = doc(db, "color", id);
  await deleteDoc(docRef);
  alert("The  Color is Delted");
};

// Delete all the colors by their Name
export const delQuery = async () => {
  const inputColor = prompt("Enter Name of Colors Want To Delete");
  const collectionRef = collection(db, "color");
  const q = query(collectionRef, where("name", "==", inputColor));
  const snapshot = await getDocs(q);

  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log(results);

  results.forEach(async(results) => {
    const docRef = doc(db, "color", results.id);
    await deleteDoc(docRef);
  });
  alert("All the colors are Delted that you Entered");
};
