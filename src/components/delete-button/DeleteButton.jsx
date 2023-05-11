import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (props) => {
  return (
    <IconButton
      aria-label="delete"
      style={{
        border: "1px solid #6a6a6a",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
      }}
    >
      <DeleteIcon sx={{ fill: "#6a6a6a" }} />
    </IconButton>
  );
};

export default DeleteButton;
