import React from "react";
import LeftNav from "../homepage/LeftNav";
import TopNav from "../homepage/TopNav";
import { Box, styled } from "@mui/material";
import RightBox from "./RightBox";
import LeftBottom from "./LeftBottom";
import {
  RadialBarChart, RadialBar,
  LineChart, Line,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const LeftBox = styled(Box)`
  background: #f3f5f7;
  height: 80%;
  width: 70%;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
`;

const Overview = styled(Box)`
  background: #ffe6db;
  border-radius: 20px;
  width: 400px;
  height: 420px;
  color: #000000;
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
  margin: 10px;
`;

const Four = styled(Box)`
  margin: 0px 10px 10px 10px;
`;

const WC = styled(Box)`
  display: flex;
`;

const WB = styled(Box)`
  display: flex;
`;

const Water = styled(Box)`
  background: #ceebee;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  color: #000000;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box
`;

const Calories = styled(Box)`
  background: #ffffc5;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  color: #000000;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Weight = styled(Box)`
  background: #d7d8e9;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  color: #000000;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BPM = styled(Box)`
  background: #ffecf2;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  color: #000000;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DashBoard = () => {
  return (
    <Box display="flex" width="100vw" height="100vh">
      <LeftNav />
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <TopNav />
        <Box display="flex" width="100%" height="100%">
          <LeftBox>
            <Overview>Overview</Overview>
            <Four>
              <WC>
                <Water>
                  Water
                 
                </Water>
                <Calories>
                  Calories
                 
                </Calories>
              </WC>
              <WB>
                <Weight>
                  Weight
                  
                </Weight>
                <BPM>
                  BPM
                 
                </BPM>
              </WB>
            </Four>
          </LeftBox>
          <RightBox />
        </Box>
        <LeftBottom />
      </Box>
    </Box>
  );
};

export default DashBoard;
