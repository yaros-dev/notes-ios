import { useContext, useState } from "react";
import { NotesContext } from "../../context";
import "./listItem.scss";

const NoteList = ({ activeNote, handleListItemClick }) => {
  const { filteredNotes, activeNoteId } = useContext(NotesContext);
  let nowDate = new Date();
  return (
    <div className="notes">
      <ul className="notes__list">
        {filteredNotes
          .sort((a, b) => b.date - a.date)
          .map((note) => (
            <li
              key={note.id}
              onClick={() => handleListItemClick(note.id)}
              className="notes__item"
              style={{
                backgroundColor: note.id === activeNoteId ? "#c4c4c4" : "white",
                cursor: "pointer",
              }}
            >
              <div className="notes__name">{`${note.text.slice(0, 17)}`}</div>
              <div className="notes__content-wrapper">
                <div className="notes__date">
                  {note.date?.toLocaleDateString() ===
                  nowDate.toLocaleDateString()
                    ? note.date?.toLocaleTimeString()
                    : note.date?.toLocaleDateString()}
                </div>
                <div className="notes__prev-content">{`${note.text.slice(
                  10,
                  30
                )}..`}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NoteList;
