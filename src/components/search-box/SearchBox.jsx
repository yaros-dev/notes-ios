import { useContext } from "react";
import Input from "@mui/material/Input";
import { NotesContext } from "../../context";

function SearchBox() {
  const { handleFilter } = useContext(NotesContext);

  return (
    <Input
      onChange={handleFilter}
      type="text"
      disableUnderline={true}
      placeholder={`Search...`}
      style={{
        border: "1px solid #b2b4b2",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
        fontSize: "12px",
        marginLeft: "5px",
      }}
    />
  );
}
export default SearchBox;
