import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useParams } from 'react-router'
import Axios from "axios";
import React from 'react';
import { useState } from "react";

export default function Form({ user }) {
  const { id } = useParams()

  const [open, setOpen] = useState(false);
  const [first_Name, set_first_Name] = useState(user.first_name);
  const [last_Name, set_last_Name] = useState(user.last_Name);
  const [email, set_email] = useState(user.email);
  const [phone, set_phone] = useState(user.phone);
  const [gender, set_gender] = useState(user.gender);
  const [date_of_birth, set_date_of_birth] = useState(user.date_of_birth);
  const [current_status, set_current_status] = useState(user.current_status);

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
        email: email,
        phone: phone,
        gender: gender,
        date_of_birth: date_of_birth,
        current_status: current_status
      }

      await Axios.put(`http://localhost:5000/api/admin/users/${user.id}`, data)
      console.log(data)
      window.location = "/team";

      // const body = { first_Name }
      // const body = {  firstName, lastName, email, phone, dateOfBirth, gender };
      // const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),

      // });
      // console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const body = { first_Name };
  //     const response = await fetch(
  //       `http://localhost:5000/api/admin/users/${user.id}`,
  //       {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body)
  //       }
  //     );
  //     console.log(response)
  //     // window.location = "/team";
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ color: 'white' }} data-bs-target={`#id${user.id}`}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
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
            type="text"
            id="date"
            onChange={(e) => set_date_of_birth(e.target.value)}

            fullWidth
            name="date of birth"
            label="Date of Birth"

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
            name="gender"
            label="Gender"
            type="text"
            id="gender"
            onChange={(e) => set_gender(e.target.value)}

            value={gender}
          />

          <TextField
            margin="normal"
            fullWidth
            name="current status"
            label="Status"
            type="text"
            id="status"
            onChange={(e) => set_current_status(e.target.value)}

            value={current_status}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={e => handleSubmit(e)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}