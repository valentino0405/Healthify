import { styled, Typography, Box, Button } from "@mui/material";
import { FitnessCenter, LocalDrink, Restaurant, Hotel, SelfImprovement } from "@mui/icons-material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

// Container for all content
const CenterText = styled(Box)`
  text-align: center;
  margin-top: 15vh;
`;

// Styled 'Get Started' Button
const GetStarted = styled(Button)`
  background: #000000;
  width: 12vw;
  border-radius: 20px;
  font-size: 16px;
  margin-top: 3vh;
  color: white;
  &:hover {
    background: gray;
  }
`;

// Icons Strip Styling
const IconStrip = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

const EntryCenter = () => {
  return (
    <CenterText>
      {/* Punchline */}
      <Typography variant="h2">
        Your Path to a Healthier You!
      </Typography>

      {/* Subtext */}
      <Typography variant="h6" color="gray" marginTop={2} maxWidth="600px" mx="auto">
        Healthify empowers you to take control of your health by tracking nutrition, 
        fitness, and overall wellness, making your journey to a healthier lifestyle easier and more effective.
      </Typography>

      {/* Health & Habit Icons Strip */}
      <IconStrip>
        {[
          { icon: <FitnessCenter fontSize="large" />, label: "Workout" },
          { icon: <LocalDrink fontSize="large" />, label: "Hydration" },
          { icon: <Restaurant fontSize="large" />, label: "Nutrition" },
          { icon: <Hotel fontSize="large" />, label: "Sleep" },
          { icon: <SelfImprovement fontSize="large" />, label: "Mindfulness" },
        ].map((item, index) => (
          <Box key={index} textAlign="center">
            {item.icon}
            <Typography variant="caption" display="block">
              {item.label}
            </Typography>
          </Box>
        ))}
      </IconStrip>

      {/* Get Started Button */}
      <GetStarted variant="contained" endIcon={<EastOutlinedIcon />}>
        Get Started
      </GetStarted>
    </CenterText>
  );
};

export default EntryCenter;
