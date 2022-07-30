import API from "./api/API";

export const getUsers = async (id = "") => {
  try {
    return await API.get(`/users`);
  } catch (error) {
    console.log("Get Users Error ", error);
    alert(`Get Users Error ${error}`);
  }
};

export const getUser = async (id = "") => {
  try {
    return await API.get(`/users/${id}`);
  } catch (error) {
    console.log("Get User Error ", error);
    alert(`Get Users Error ${error}`);
  }
};

export const addUser = async user => {
  try {
    return await API.post("/users", user);
  } catch (error) {
    console.log("Add User Error ", error);
    alert(`Add Users Error ${error}`);
  }
};

export const deleteUser = async (id = "") => {
  try {
    return await API.delete(`/users/${id}`);
  } catch (error) {
    console.log("Delete User Error ", error);
    alert(`Delete Users Error ${error}`);
  }
};

export const editUser = async (id, user) => {
  try {
    return await API.put(`/users/${id}`, user);
  } catch (error) {
    console.log("Edit User Error ", error);
    alert(`Edit Users Error ${error}`);
  }
};
