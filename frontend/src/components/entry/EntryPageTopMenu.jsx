import { AppBar, styled, Toolbar, Typography, Button, Box } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";

const TopNav = styled(AppBar)`
  box-shadow: none;
  background: #ffffff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Text = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-grow: 1;
`;

const Buttons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SignButton = styled(Button)`
  background: #000000;
  width: 7vw;
  border-radius: 20px;
`;

const LoginButton = styled(Button)`
  color: #000000;
  width: 7vw;
  border-radius: 20px;
`;

const EntryPageTopMenu = () => {
  const navigate = useNavigate(); // ✅ Hook for programmatic navigation

  return (
    <TopNav position="static">
      <Toolbar>
        <Typography variant="h4">Healthify</Typography>

        <Text>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Planning</Typography>
          <Typography variant="body1">Plans</Typography>
          <Typography variant="body1">Pricing</Typography>
          <Typography variant="body1">FAQs</Typography>
        </Text>

        <Buttons>
          <LoginButton
            variant="text"
            startIcon={<LoginOutlinedIcon />}
            onClick={() => navigate("/login")} // ✅ Redirect on click
          >
            Login
          </LoginButton>
          <SignButton
            variant="contained"
            onClick={() => navigate("/signup")} // ✅ Redirect on click
          >
            Sign Up
          </SignButton>
        </Buttons>
      </Toolbar>
    </TopNav>
  );
};

export default EntryPageTopMenu;
