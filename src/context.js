import React, { createContext, useState, useEffect } from "react";
import notesDB from "./api/IndexedDB";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);

  const [selectedNote, setSelectedNote] = useState({
    id: "",
    text: "",
    data: "",
  });
  const [valueTextEditor, setValueTextEditor] = useState("");
  const [filteredNotes, setfilteredNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      let notes = await notesDB.notes.toArray();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  useEffect(() => {
    setfilteredNotes(notes);
  }, [notes]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    if (!searchWord) {
      setfilteredNotes(notes);
    }
    const newNotes = notes.filter((note) => {
      return note.text.toLowerCase().includes(searchWord.toLowerCase());
    });
    setfilteredNotes(newNotes);
  };

  const changeValueTextEditor = (value) => {
    setValueTextEditor(value);
  };

  const onSetActiveNoteId = (id) => {
    setActiveNoteId(id);
  };

  const handleNoteEditor = (text, action, id) => {
    switch (action) {
      case "add":
        if (text !== "") {
          const note = {
            text: text,
            date: new Date(),
          };
          notesDB.notes.add(note).then(async () => {
            let notes = await notesDB.notes.toArray();
            setNotes(notes);
            setActiveNoteId(note.id);
          });
          setIsNoteEditorOpen(false);
        } else {
          const note = {
            text: "New note",
            date: new Date(),
          };
          notesDB.notes.add(note).then(async () => {
            let notes = await notesDB.notes.toArray();
            setNotes(notes);
            setActiveNoteId(note.id);
          });
          setIsNoteEditorOpen(false);
        }
        break;
      case "delete":
        notesDB.notes.delete(id).then(async () => {
          let notes = await notesDB.notes.toArray();
          setNotes(notes);
        });
        setIsNoteEditorOpen(false);
        break;
      case "update":
        if (text !== "") {
          notesDB.notes
            .update(id, { text, date: new Date() })
            .then(async () => {
              let notes = await notesDB.notes.toArray();
              setNotes(notes);
            });
          setIsNoteEditorOpen(false);
        }
        break;
      case "clear":
        setIsNoteEditorOpen(false);
        break;
      default:
        return null;
    }
  };

  const handleOpenNoteEditor = (id, text, date) => {
    setIsNoteEditorOpen(true);
    setSelectedNote({
      id,
      text,
      date,
    });
  };

  const changeSelectedNote = (prop, value) => {
    setSelectedNote((prevState) => ({
      ...prevState,
      [prop]: value,
    }));
  };

  const addNote = () => {
    handleNoteEditor("" || valueTextEditor, "add");
    changeValueTextEditor("");
  };

  const editNote = () => {
    handleNoteEditor(valueTextEditor, "update", selectedNote.id);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        onSetActiveNoteId,
        activeNoteId,
        selectedNote,
        filteredNotes,
        valueTextEditor,
        isNoteEditorOpen,
        changeValueTextEditor,
        handleOpenNoteEditor,
        changeSelectedNote,
        handleNoteEditor,
        addNote,
        editNote,
        handleFilter,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
