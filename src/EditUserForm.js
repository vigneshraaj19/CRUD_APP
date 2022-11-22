import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./App.css";

const EditUserForm = (props) => {
  const initialFormState = { id: "", first_name: "", email: "", phone_no: "" };

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetAddUser();
  };

  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  const submitform = (e) => {
    e.preventDefault();
    if (!user.first_name || !user.email) return;
    props.editing ? props.updateUser(user.id, user) : props.addUser(user);
    resetAddUser();
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Dialog
        
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          {" "}
          <DialogTitle id="responsive-dialog-title">
            {props.editing ? "Edit User" : "Add User"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Enter First Name"
                value={user.first_name}
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={user.email}
                onChange={handleInputChange}
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_no"
                placeholder="Enter Phone Number"
                value={user.phone_no}
                onChange={handleInputChange}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              size="small"
              variant="contained"
              onClick={handleClose}
              className="button muted-button"
            >
              Cancel
            </Button>
            <Button onClick={submitform}   size="small" variant="contained">
             Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <h2 className="title">Manage User</h2>
      <div className="addbutton">
      <Button  onClick={handleClickOpen} variant="contained">
        <Box sx={{ fontWeight: "bold", fontSize: "13px", }}>Add</Box>
      </Button>
      </div>
    </div>
  );
};

export default EditUserForm;
