import { Box, List, ListItem, ListItemButton, ListItemIcon, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const Sidebar = styled(Box)({
  width: "7vw",
  height: "contain",
  background: "#000000",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "20px",
 // borderTopLeftRadius: "40px", // Increased curve
  //borderTopRightRadius: "30px", // Increased curve
 //borderRadius:"30px"
 //borderBottomRightRadius:"35px"
});

const Logo = styled(Box)({
  width: "40px",
  height: "40px",
  background: "#C4FF26",
  borderRadius: "50%",
  marginBottom: "15vh",
});

const StyledListItem = styled(ListItemButton)(({ active }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  marginBottom: "3vh",
  borderRadius: "100px",
  backgroundColor: active ? "#C4FF26" : "transparent",
  width: "60px",
  height: "60px",
  "&:hover": {
    backgroundColor: "#C4FF26",
  },
}));

const LeftNav = () => {
  const [active, setActive] = useState("home");

  return (
    <Sidebar>
      <Logo />
      <List>
        {[
          { id: "home", icon: <HomeIcon /> },
          { id: "stats", icon: <ShowChartIcon /> },
          { id: "favorites", icon: <FavoriteIcon /> },
          { id: "calendar", icon: <CalendarTodayIcon /> },
          { id: "profile", icon: <PersonIcon /> }
        ].map(({ id, icon }) => (
          <ListItem key={id} disablePadding>
            <StyledListItem active={active === id} onClick={() => setActive(id)}>
              <ListItemIcon sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "unset",
                color: active === id ? "#000" : "#fff"
              }}>
                {icon}
              </ListItemIcon>
            </StyledListItem>
          </ListItem>
        ))}
      </List>
    </Sidebar>
  );
};

export default LeftNav;