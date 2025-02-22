import { Box, Typography, IconButton, Avatar, Menu, MenuItem, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { styled } from "@mui/system";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserButton ,useUser} from "@clerk/clerk-react";

const NavBar = styled(Box)`
  background: #000000;
  width: 95vw;
  height: 10vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 2px solid #e0e0e0;
`;

const LeftSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CurvedBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid #e0e0e0;
  padding: 6px 12px;
  border-radius: 20px;
  color: #ffffff;
`;

const TopNav = () => {

  const { user } = useUser(); 

  return (
    <NavBar>
      {/* Left Section - Profile and Account */}
      <LeftSection>
        <CurvedBox>
          <UserButton sx={{ width: 32, height: 32 }} />
          <Typography variant="body2" >
          {user.firstName}
          </Typography>
          <FavoriteIcon fontSize="small" />
          <MoreHorizIcon fontSize="small"/>
        </CurvedBox>
        </LeftSection>

      {/* Right Section - Notifications, Date, and Menu */}
      <RightSection>
        <Badge badgeContent={5} color="primary">
          <IconButton>
            <NotificationsNoneIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </Badge>
        <CurvedBox>
          <Typography variant="body2">Hello</Typography>
        </CurvedBox>
        <IconButton>
          <MenuIcon sx={{ color: "#ffffff" }} />
        </IconButton>
      </RightSection>
    </NavBar>
  );
};

export default TopNav;