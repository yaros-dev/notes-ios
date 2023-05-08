import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import WorkSpace from "../work-space/WorkSpace";
import "./app.scss";

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <WorkSpace />
      </Box>
    </Container>
  );
}

export default App;
