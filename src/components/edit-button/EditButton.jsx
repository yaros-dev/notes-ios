import EditNoteIcon from "@mui/icons-material/EditNote";
import IconButton from "@mui/material/IconButton";
const EditButton = (props) => {
  return (
    <IconButton
      aria-label="edit"
      {...props}
      style={{
        border: "1px solid #6a6a6a",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
      }}
    >
      <EditNoteIcon sx={{ fill: "#6a6a6a" }} />
    </IconButton>
  );
};

export default EditButton;
