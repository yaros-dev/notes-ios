import { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import Input from "@mui/material/Input";

function SearchBox() {
  return (
    <Input
      type="text"
      disableUnderline={true}
      placeholder={`Search...`}
      style={{
        border: "1px solid #b2b4b2",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        padding: "0 10px",
        fontSize: "12px",
      }}
    />
  );
}

export default SearchBox;
