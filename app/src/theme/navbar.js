import { AppBar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavHeader = styled(AppBar)`
  background: #1976d2;
`;

export const NavTab = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;
