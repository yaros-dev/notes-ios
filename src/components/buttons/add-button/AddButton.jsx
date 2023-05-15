import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import { NotesContext } from "../../../context";
import { useContext } from "react";
const AddButton = () => {
  const { addNote } = useContext(NotesContext);
  return (
    <Button
      aria-label="edit"
      onClick={addNote}
      style={{
        border: "1px solid #b2b4b2",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
      }}
    >
      <AddOutlinedIcon sx={{ fill: "#6a6a6a" }} />
    </Button>
  );
};

export default AddButton;
