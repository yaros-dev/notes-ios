import React, { useEffect, useState, useId } from "react";
import { Context } from "../context";
import Main from "../components/main/Main";

const IndexedDB = () => {
  //   const getId = useId();
  //   const defailtContent = {
  //     id: getId,
  //     note: "Sport",
  //     noteContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   };

  //   const [dBList, setdBList] = useState([defailtContent]);
  //   let db = null;
  //   let objectStore = null;

  //   DBOpenReq.onsuccess = (event) => {
  //     db = event.target.result;
  //     objectStore = db.transaction("notes", "readwrite").objectStore("notes");
  //     console.log("Database opened successfully");
  //     readAllNotes();
  //   };

  //   DBOpenReq.onupgradeneeded = (event) => {
  //     db = event.target.result;
  //     objectStore = db.createObjectStore("notes", {
  //       keyPath: "id",
  //       autoIncrement: true,
  //     });
  //     console.log("Database upgraded successfully");
  //   };

  //   DBOpenReq.onerror = (event) => {
  //     console.log("Error opening database", event.target.error);
  //   };
  //   // add a new note to the database
  //   const addNote = (note) => {
  //     const req = objectStore.add(note);
  //     req.onsuccess = () => {
  //       console.log("New note added to the database");
  //       readAllNotes();
  //     };
  //   };

  //   // update an existing note in the database
  //   const updateNote = (note) => {
  //     const req = objectStore.put(note);
  //     req.onsuccess = () => {
  //       console.log("Note updated in the database");
  //       readAllNotes();
  //     };
  //   };

  //   // delete a note from the database
  //   const deleteNote = (id) => {
  //     const req = objectStore.delete(id);
  //     req.onsuccess = () => {
  //       console.log("Note deleted from the database");
  //       readAllNotes();
  //     };
  //   };

  //   // search for notes in the database by text
  //   const searchNotes = (text) => {
  //     const req = objectStore
  //       .index("noteContent")
  //       .openCursor(IDBKeyRange.bound(text, text + "\uffff"));
  //     req.onsuccess = (event) => {
  //       const cursor = event.target.result;
  //       if (cursor) {
  //         console.log(cursor.value);
  //         cursor.continue();
  //       } else {
  //         console.log("No more notes found");
  //       }
  //     };
  //   };

  //   // read all notes from the database
  //   const readAllNotes = () => {
  //     const req = objectStore.getAll();
  //     req.onsuccess = (event) => {
  //       const notes = event.target.result;
  //       setdBList(notes);
  //     };
  //   };

  //   // handle button click events
  //   const btnAdd = () => {
  //     const newNote = {
  //       note: "",
  //       noteContent: "",
  //     };
  //     addNote(newNote);
  //   };

  //   const btnUpdate = (note) => {
  //     updateNote(note);
  //   };

  //   const btnDelete = (id) => {
  //     const confirmDelete = window.confirm(
  //       "Are you sure you want to delete this note?"
  //     );
  //     if (confirmDelete) {
  //       deleteNote(id);
  //     }
  //   };

  //   const wList = (text) => {
  //     searchNotes(text);
  //   };

  //   // open the database when the component mounts
  //   useEffect(() => {
  //     openDB();
  //   }, []);

  return (
    <>
      {/* <Context.Provider
        value={{ dBList, wList, btnAdd, btnUpdate, btnDelete }}
      ></Context.Provider> */}
    </>
  );
};

export default IndexedDB;
