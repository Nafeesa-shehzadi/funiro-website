import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  width: "100%",
}));

const Logo = styled("img")({
  height: 80,
  cursor: "pointer",
});

const CenterNav = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  padEnd: "20rem",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none", // Hide navigation links on smaller screens
  },
}));

const NavItem = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: "bold",
  marginRight: "20px",
}));

const RightIcons = styled(Box)({
  display: "flex",
  gap: "30px",
  alignItems: "center",
  paddingRight: "10rem",
});

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        {/* Left - Logo */}
        <Logo src="/logo.jpg" alt="Logo" />

        {/* Center - Navigation Links */}
        <CenterNav>
          <NavItem variant="h6">Home</NavItem>
          <NavItem variant="h6">About</NavItem>
          <NavItem variant="h6">Shop</NavItem>
          <NavItem variant="h6">Contact</NavItem>
        </CenterNav>

        {/* Right - Icons */}
        <RightIcons>
          <IconButton color="inherit">
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </RightIcons>
      </StyledToolbar>
    </AppBar>
  );
}
