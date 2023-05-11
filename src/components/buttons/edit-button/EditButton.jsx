import EditNoteIcon from "@mui/icons-material/EditNote";
import Button from "@mui/material/Button";
const EditButton = (props) => {
  return (
    <Button
      aria-label="edit"
      style={{
        border: "1px solid #b2b4b2",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
      }}
    >
      <EditNoteIcon sx={{ fill: "#6a6a6a" }} />
    </Button>
  );
};

export default EditButton;
