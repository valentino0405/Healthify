import React from "react";
import { Box, styled } from "@mui/material";
import BasicDateCalendar from './Calendar'; // Adjust the path if needed

const RigBox = styled(Box)`
  background: #f3f5f7;
  height: 100%;
  width: 30%;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  overflow-y: auto; /* Enables scrolling if content overflows */
`;

const RightBox = () => {
  return (
    <RigBox>
      <h2 className="text-xl font-bold text-center mb-4">Calendar</h2>
      <BasicDateCalendar />
    </RigBox>
  );
};

export default RightBox;
