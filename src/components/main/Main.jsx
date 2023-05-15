import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import WorkSpace from "../work-space/WorkSpace";
import Header from "../header/Header";
const Main = () => {
  return (
    <>
      <Container maxWidth="md" style={{ height: "100%", overflow: "hidden" }}>
        <Box sx={{ bgcolor: "#f9f9f7", minHeight: "100vh" }}>
          <Header />
          <WorkSpace />
        </Box>
      </Container>
    </>
  );
};

export default Main;
