import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "axios";
import React, { useEffect } from 'react';
import { useState } from "react";
import authHeader from '../authHeaders';
import User from "../authUserLink";

export default function Form({ user }) {
  const [open, setOpen] = useState(false);
  const [first_Name, set_first_Name] = useState('');
  const [last_Name, set_last_Name] = useState('');
  const [phone, set_phone] = useState('');
  const [date_of_birth, set_date_of_birth] = useState();
  const [status, set_status] = useState(user.current_status);
  const [users, setUsers] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const data = {
        first_Name: first_Name,
        last_Name: last_Name,
        phone: phone,
        date_of_birth: date_of_birth,
        status: status
      }
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${user.id}`,
        {
          method: "PUT",

          headers: authHeader(),
          // "Content-Type": "application/json"

          body: JSON.stringify(data)
        }
      );
      // fetch(``, {
      //   method: 'put',
      //   headers: new Headers({
      //     'Authorization': authHeader(),
      //     'Content-Type': 'application/json'
      //   }),
      //   body: 'A=1&B=2'
      // });
      // await Axios.put(`http://localhost:5000/api/admin/users/${user.id}`, { data }, {
      //   headers: authHeader(),
      //   "Content-Type": "application/json",
      // })
      window.location = "/table";
    } catch (error) {
      console.log(error.message)
    }

  }

  const userdata = {
    first_Name: first_Name,
    last_Name: last_Name,
    phone: phone,
    date_of_birth: date_of_birth,
    status: status
  }
  const UpdateUser = async (userdata) => {
    return await Axios
      .put(`http://localhost:5000/api/admin/users/${user.id}`, { userdata })
      .then((response) => {
        console.log(response.data.token)
        localStorage.setItem("authtoken", response.data.token);
        const newData = JSON.stringify(UpdateUser)
        return newData.data;
      });
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ color: 'white' }} data-bs-target={`#id${user.id}`}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>

          <TextField
            margin="normal"

            fullWidth
            name="name"
            label="First Name"
            type="text"
            id="name"
            value={first_Name}
            onChange={(e) => set_first_Name(e.target.value)}
          />

          <TextField
            margin="normal"

            fullWidth
            name="name"
            label="Last Name"
            type="text"
            id="lastName"
            value={last_Name}
            onChange={(e) => set_last_Name(e.target.value)}
          />

          <TextField
            margin="normal"
            id="date"
            onChange={(e) => set_date_of_birth(e.target.value)}

            fullWidth
            name="date of birth"

            type="date"
            value={date_of_birth}
          />

          <TextField
            margin="normal"

            fullWidth
            name="Phone"
            label="Phone"
            type="number"
            id="phone"
            onChange={(e) => set_phone(e.target.value)}

            value={phone}
          />
          <TextField
            margin="normal"
            fullWidth
            name="current status"
            label="Status"
            type="text"
            id="status"
            onChange={(e) => set_status(e.target.value)}

            value={status}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={e => UpdateUser(e)} >Save</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}