import { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { Home, BarChart, Layers, ExitToApp } from "@mui/icons-material";

const Container = styled(Box)`
  width: 17vw;
  height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const NavButton = styled(Button)`
  justify-content: flex-start;
  text-transform: none;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ active }) => (active ? "white" : "#6c757d")};
  background-color: ${({ active }) => (active ? "#dc3545" : "transparent")};
  &:hover {
    background-color: ${({ active }) => (active ? "#c82333" : "#e9ecef")};
  }
`;

const LeftNav = () => {
  const [activeTab, setActiveTab] = useState("All Habits");

  return (
    <Container>
      <NavButton
        active={activeTab === "All Habits"}
        startIcon={<Home />}
        onClick={() => setActiveTab("All Habits")}>All Habits</NavButton>
      <NavButton
        active={activeTab === "Statistics"}
        startIcon={<BarChart />}
        onClick={() => setActiveTab("Statistics")}>Statistics</NavButton>
      <NavButton
        active={activeTab === "Areas"}
        startIcon={<Layers />}
        onClick={() => setActiveTab("Areas")}>Areas</NavButton>
      
    </Container>
  );
};

export default LeftNav;
