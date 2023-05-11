import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import EditButton from "../edit-button/EditButton";
import AddButton from "../add-button/AddButton";
import DeleteButton from "../delete-button/DeleteButton";
import TextField from "@mui/material/TextField";
import SearchBox from "../search-box/SearchBox";
import "./header.scss";

const Header = () => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: "#d6d6d6",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <AddButton sx={{ mr: 2 }} />
        <DeleteButton sx={{ mr: 2 }} disabled={true} />
        <EditButton sx={{ mr: 2 }} disabled={true} />
      </Stack>
      {/* <SearchBox /> */}
    </Toolbar>
  );
};

export default Header;
