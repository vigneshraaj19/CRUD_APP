import React from "react";
import "./usertable.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditUserForm from "./EditUserForm";
const UserTable = (props) =>{

 

return (
  <table id="customers">
    <thead>
      <tr>
        <th>USER ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE NUMBER</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {props.users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.email}</td>
          <td>{user.phone_no}</td>
          <td>
            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                {" "}
                <Box sx={{ fontWeight: "bold", fontSize: "13px" }}>Edit</Box>
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => props.deleteUser(user.id)}
              >
                <Box sx={{ fontWeight: "bold", fontSize: "13px" }}>Delete</Box>
              </Button>
            </Stack>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
              }
export default UserTable;
