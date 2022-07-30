import React, { useState, useEffect, useCallback } from "react";
import { addUser, editUser, getUser } from "../services/users";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FormControl, InputLabel, Input, Typography, Box } from "@mui/material";
import { CustomButton, Container, FormContainer } from "../theme/shared";

const initialValue = {
  username: "",
  name: "",
  email: "",
  mobile: ""
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { username, name, email, mobile } = user;
  const navigator = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const editMode = location.pathname?.includes("edit");

  const onInptChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleAddUser = () => {
    addUser(user)
      .then(res => {
        if (res !== null) navigator("/");
      })
      .catch(error => alert(error));
  };

  const loadUserDetails = useCallback(() => {
    getUser(id)
      .then(res => {
        if (res !== null) setUser(res.data);
      })
      .catch(error => alert(error));
  }, [id]);

  const handleEditUser = () => {
    editUser(id, user)
      .then(res => {
        if (res !== null) navigator("/");
      })
      .catch(error => alert(error));
  };

  useEffect(() => {
    if (editMode) {
      loadUserDetails();
    }
  }, [loadUserDetails, editMode]);
  useEffect(() => {
    if (!editMode) {
      setUser(initialValue);
    }
    return () => {};
  }, [editMode]);

  return (
    <Container>
      <Typography variant="h4">{editMode ? "Edit" : "Add"} User</Typography>
      <form
        onSubmit={e => {
          e.preventDefault();
          editMode ? handleEditUser() : handleAddUser();
        }}
      >
        <FormContainer>
          <FormControl required>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              onChange={e => onInptChange(e)}
              name="name"
              value={name}
              id="name"
              style={{ marginInline: "15px" }}
            />
          </FormControl>

          <FormControl required>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              onChange={e => onInptChange(e)}
              name="username"
              value={username}
              id="username"
              style={{ marginInline: "15px" }}
            />
          </FormControl>

          <FormControl required>
            <InputLabel htmlFor="useremail">Email</InputLabel>
            <Input
              onChange={e => onInptChange(e)}
              name="email"
              value={email}
              id="useremail"
              style={{ marginInline: "15px" }}
              type="email"
            />
          </FormControl>

          <FormControl required>
            <InputLabel htmlFor="usermobile">Mobile</InputLabel>
            <Input
              onChange={e => onInptChange(e)}
              name="mobile"
              value={mobile}
              id="usermobile"
              style={{ marginInline: "15px" }}
              inputProps={{ maxLength: 14 }}
              type="number"
            />
          </FormControl>

          <FormControl>
            <Box display="flex">
              <CustomButton variant="contained" color="primary" type="submit">
                {editMode ? "Edit" : "Add"} User
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={() => navigator("/")}
              >
                Back
              </CustomButton>
            </Box>
          </FormControl>
        </FormContainer>
      </form>
    </Container>
  );
};

export default AddUser;
