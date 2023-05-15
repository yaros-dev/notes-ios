import React, { useContext, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import SideBar from "../side-bar/SideBar";
import Clock from "../clock/Clock";
import { NotesContext } from "../../context";
import "./workSpace.scss";

const WorkSpace = () => {
  const {
    valueTextEditor,
    handleOpenNoteEditor,
    selectedNote,
    handleNoteEditor,
    changeValueTextEditor,
    filteredNotes,
    onSetActiveNoteId,
  } = useContext(NotesContext);

  const isFirstClick = useRef(true);

  useEffect(() => {
    if (!isFirstClick.current) {
      changeValueTextEditor(selectedNote.text);
    }
  }, [selectedNote, selectedNote.text, selectedNote.id]);

  const handleSave = () => {
    handleNoteEditor(valueTextEditor, "update", selectedNote.id);
    changeValueTextEditor("");
  };

  const handleListItemClick = (id) => {
    onSetActiveNoteId(id);
    const note = filteredNotes.find((note) => note.id === id);
    if (note) {
      handleOpenNoteEditor(note.id, note.text, note.date);
      changeValueTextEditor("");
      isFirstClick.current = true;
    }
    if (isFirstClick.current) {
      changeValueTextEditor(selectedNote.text);
      isFirstClick.current = false;
    }
  };

  return (
    <>
      <div className="work-space">
        {filteredNotes.length === 0 ? (
          <div className="notes">
            <ul className="notes__list">
              <div className="notes__item">
                <div className="notes__empty">Notes empty</div>
              </div>
            </ul>
          </div>
        ) : (
          <SideBar
            style={{ width: "300px" }}
            filteredNotes={filteredNotes}
            handleListItemClick={handleListItemClick}
          />
        )}
        <div
          className="work-space__editor "
          data-color-mode="light"
          style={{ width: "100%", height: "100vh" }}
        >
          <div className="work-space__clock">
            <Clock />
          </div>
          <MDEditor
            value={valueTextEditor}
            onChange={changeValueTextEditor}
            preview="edit"
            // onBlur={handleSave}
            hideToolbar="true"
            highlightEnable={false}
            textareaProps={{
              placeholder: "Please enter the text",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default WorkSpace;
