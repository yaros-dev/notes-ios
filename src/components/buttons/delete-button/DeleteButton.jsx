import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const DeleteButton = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        aria-label="delete"
        style={{
          border: "1px solid #b2b4b2",
          borderRadius: "4px",
          backgroundColor: "#f5f5f5",
          padding: "0 10px",
        }}
        onClick={handleOpenModal}
      >
        <DeleteIcon sx={{ fill: "#6a6a6a" }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cкасувати</Button>
          <Button onClick={handleClose} autoFocus>
            Видалити
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
