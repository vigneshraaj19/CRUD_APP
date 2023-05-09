import React from "react";
import "./usertable.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserTable = () =>{
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const getdata = () => {
    axios.get(`http://localhost:7000/crud/getdata`)
      .then((data) => setUsers(data.data.data));
  };
  console.log(users)

  useEffect(()=>{
    getdata()
  },[])

  const deleteUser=(code)=>{
    axios.delete(`http://localhost:7000/crud/deletedata/${code}`).then((item)=>{
      getdata()
    })
  }

return (
  <div>
    <Button
                size="small"
                variant="contained" 
                onClick={()=>{
                  navigate(`/add`)
                }}            
              >Add</Button>
  
  <table id="customers">
    <thead>
      <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>ROLE</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.role}</td>
          <td>
              <Button
                size="small"
                variant="contained" 
                onClick={()=>{
                  navigate(`/edit/${user._id}`)
                }}            
              >
                {" "}
                <Box sx={{ fontWeight: "bold", fontSize: "13px" }}>Edit</Box>
              </Button>
              <Button
                size="small"
                variant="contained"
                 onClick={() => deleteUser(user._id)}
              >
                <Box sx={{ fontWeight: "bold", fontSize: "13px" }}>Delete</Box>
              </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
);
              }
export default UserTable;
