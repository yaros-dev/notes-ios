import { useState, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { NotesContext } from "../../../context";

const DeleteButton = () => {
  const { handleNoteEditor, selectedNote, activeNoteId } =
    useContext(NotesContext);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteNote = () => {
    handleNoteEditor("", "delete", selectedNote.id);
    setOpen(false);
  };

  return (
    <>
      <Button
        disabled={!activeNoteId}
        aria-label="delete"
        style={{
          border: "1px solid #b2b4b2",
          borderRadius: "4px",
          backgroundColor: "#f5f5f5",
          padding: "0 10px",
        }}
        onClick={handleOpenModal}
      >
        <DeleteIcon sx={{ fill: !activeNoteId ? "#6a6a6a61" : "#6a6a6a" }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ fontFamily: "inherit" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontFamily: "inherit", fontSize: "16px", color: "#1D1D1D" }}
        >{`Видалити нотатку? ${"New note"} `}</DialogTitle>

        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              fontFamily: "inherit",
              fontSize: "12px",
              color: "#1D1D1D",
              background: "#d6d6d6",
            }}
          >
            Cкасувати
          </Button>
          <Button
            onClick={deleteNote}
            sx={{
              fontFamily: "inherit",
              fontSize: "12px",
              color: "#1D1D1D",
              background: "#d6d6d6",
            }}
            autoFocus
          >
            Видалити
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
