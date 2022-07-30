import { Toolbar } from "@mui/material";
import { NavTab, NavHeader } from "../theme/navbar";

const NavBar = () => {
  return (
    <NavHeader position="static">
      <Toolbar>
        <NavTab to="/" exact>
          All Users
        </NavTab>
        <NavTab to="add" exact>
          Add User
        </NavTab>
      </Toolbar>
    </NavHeader>
  );
};

export default NavBar;
