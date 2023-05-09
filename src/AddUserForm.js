import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import "./App.css";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddUserForm = () => {
    const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[phone,setphone]=useState("")
  const[role,setrole]=useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  
const Submitform=()=>{
    
    const newdata={
        name:name,
        email:email,
        phone:phone,
        role:role,
        image:selectedFile
      };     
      console.log(selectedFile)

      fetch(`http://localhost:7000/crud/createdata`, {
        method: "POST",body: JSON.stringify(newdata),
        headers: {"Content-Type": "application/json",}
      }).then((item) =>{ 
        console.log(item)
        navigate('/userlist')});
}

const onFormSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData();

    formData.append('myImage',e.target.files[0]);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    setSelectedFile(e.target.files[0])
    axios.post("http://localhost:7000/crud/upload",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
}
   
  return (
    <div>
      <div>
          <DialogContent>
            <DialogContentText>
              <label> Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
         
                onChange={(e)=>setname(e.target.value)}
              
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
               
                onChange={(e)=>setemail(e.target.value)}       
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_no"
                placeholder="Enter Phone Number"
             
                onChange={(e)=>setphone(e.target.value)}
              
              />
              <label>Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter Role"
                onChange={(e)=>setrole(e.target.value)}
                      
              />
              <label>Image</label>

            <input
          type="file"
          onChange={(e) =>
            { 
               
                onFormSubmit(e)}}
        />
             
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              size="small"
              variant="contained"           
              className="button muted-button"
            >
              Cancel
            </Button>
            <Button onClick={Submitform}  size="small" variant="contained">
             Add
            </Button>
          </DialogActions>
      </div>
    </div>
  );
};

export default AddUserForm;
