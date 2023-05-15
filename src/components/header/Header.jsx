import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import EditButton from "../buttons/edit-button/EditButton";
import AddButton from "../buttons/add-button/AddButton";
import DeleteButton from "../buttons/delete-button/DeleteButton";
import SearchBox from "../search-box/SearchBox";
import { NotesContext } from "../../context";
import { useContext } from "react";

import "./header.scss";

const Header = () => {
  const { selectedNote, editNote } = useContext(NotesContext);

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#d6d6d6",
          customizeToolbar: {
            minHeight: "20px",
          },
        }}
        variant="dense"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <AddButton sx={{ mr: 2, cursor: "pointer" }} />
          <DeleteButton sx={{ mr: 2, cursor: "pointer" }} />
          <EditButton
            sx={{ mr: 2, cursor: "pointer" }}
            editNote={editNote}
            selectedNote={selectedNote}
          />
        </Stack>
        <SearchBox />
      </Toolbar>
    </>
  );
};

export default Header;
