import { useState, useEffect } from "react";

import { getUsers, deleteUser } from "../services/users";
import { Link, useNavigate } from "react-router-dom";

import {
  TableHead,
  TableCell,
  TableBody,
  Button,
  Typography
} from "@mui/material";
import { UsersTable, StylesHeader, StyledRow } from "../theme/allUsers";
import { Container, CustomButton } from "../theme/shared";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();

  const getAllUsers = () => {
    getUsers()
      .then(res => {
        if (res !== null) setUsers(res.data);
      })
      .catch(error => alert(error));
  };

  const deleteUserData = id => {
    deleteUser(id)
      .then(res => {
        if (res !== null) getAllUsers();
      })
      .catch(error => alert(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return users.length ? (
    <UsersTable>
      <TableHead>
        <StylesHeader>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile</TableCell>
          <TableCell></TableCell>
        </StylesHeader>
      </TableHead>

      <TableBody>
        {users.map(user => (
          <StyledRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.mobile}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </StyledRow>
        ))}
      </TableBody>
    </UsersTable>
  ) : (
    <Container>
      <Typography variant="h4" className="center" my={2} textAlign="center">
        You Don't Have Any User
      </Typography>

      <CustomButton
        color="secondary"
        variant="contained"
        onClick={() => navigator("./add")}
      >
        Create User
      </CustomButton>
    </Container>
  );
};

export default AllUsers;
