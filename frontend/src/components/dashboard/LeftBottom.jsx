import React from 'react';
import { Box, styled } from "@mui/material";

const LeftBot = styled(Box)`
  background: #f3f5f7;
  height: auto; /* Allow it to grow dynamically */
  width: 69%; /* Full width to match other sections */
  display: flex;
  align-items: center; /* Center content */
  justify-content: center; /* Center text */
   /* Space from above section */
  border-radius: 10px;
  padding: 15px;
  margin: 10px 10px 10px 10px;
  color:
`;

const LeftBottom = () => {
  return (
    <LeftBot>
     Streaks
    </LeftBot>
  );
}

export default LeftBottom;
