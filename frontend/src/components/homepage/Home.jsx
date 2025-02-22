import { Box, styled } from "@mui/material";
import LeftNav from "./LeftNav";
import MidNav from "./MidNav";
import TopNav from "./TopNav";


const Home = () => {
  return (
    <Box display="flex" margin="0px" width="100vw" height="100vh">
      <LeftNav />
      <Box display="flex" width="100vw" height="100vh" flexDirection="column">
        <TopNav />
        <MidNav />
      </Box>
    </Box>
  );
};

export default Home;