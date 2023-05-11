import { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

function SearchBox() {
  return (
    <Search sx={{ backgroundColor: "#fff", height: "40px" }}>
      <TextField id="standard-search" type="search" />
    </Search>
  );
}

export default SearchBox;
