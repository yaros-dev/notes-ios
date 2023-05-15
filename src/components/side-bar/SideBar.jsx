import "./sideBar.scss";
import NoteList from "../note-list/NoteList";
const SideBar = ({ activeNote, handleListItemClick }) => {
  return (
    <NoteList
      activeNote={activeNote}
      handleListItemClick={handleListItemClick}
    />
  );
};

export default SideBar;
