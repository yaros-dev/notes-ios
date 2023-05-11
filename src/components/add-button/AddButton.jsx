import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import IconButton from "@mui/material/IconButton";
const AddButton = () => {
  return (
    <IconButton
      aria-label="edit"
      style={{
        border: "1px solid #6a6a6a",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
      }}
    >
      <AddOutlinedIcon sx={{ fill: "#6a6a6a" }} />
    </IconButton>
  );
};

export default AddButton;
