import React, { useEffect, useState } from "react";
import EditUserForm from "./EditUserForm";
import UserTable from "./UserTable";
import "./App.css";

const Apps = () => {
  const [users, setUsers] = useState([]);
  const getdata = () => {
    fetch(`https://5f252b05c85de20016292e83.mockapi.io/api/v1/employee`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setUsers(mvs));
  };

  useEffect(() =>{ 
    getdata()
  if(editing !== false)  editRow() 
},[]);

  const initialFormState = { id: "", first_name: "", email: "", phone_no: "" };

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    fetch(`https://5f252b05c85de20016292e83.mockapi.io/api/v1/employee`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then(() => getdata());
  };

  const deleteUser = (id) => {
    
     fetch(`https://5f252b05c85de20016292e83.mockapi.io/api/v1/employee/${id}`, {
       method: "DELETE",
     }).then(() => getdata());
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    fetch(`https://5f252b05c85de20016292e83.mockapi.io/api/v1/employee/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: { "Content-Type": "application/json" },
    }).then(() => getdata());
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Apps;
