import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserTable from "./UserTable";
import EditUserForm  from "./EditUserForm"
import AddUserForm from "./AddUserForm"
import Button from "@mui/material/Button";

const Apps = () => {

  return (
    <div >
     
      <Routes>
      <Route path="/userlist" element={<UserTable />} />
      <Route path="/edit/:_id" element={<EditUserForm />} />
      <Route path="/add" element={<AddUserForm />} />
      </Routes>
      
    </div>
  );
};

export default Apps;
