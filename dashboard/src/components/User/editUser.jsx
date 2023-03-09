import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import authHeader from '../authHeaders';
import axios from 'axios';

export default function Form({ user }) {
  const [open, setOpen] = React.useState(false);
  const [first_Name, set_first_Name] = React.useState(user.first_name);
  const [last_Name, set_last_Name] = React.useState(user.last_name);
  const [phone, set_phone] = React.useState(user.phone);
  const [gender, set_gender] = React.useState(user.gender);
  const [status, set_status] = React.useState(user.status);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const UpdateUser = async e => {
    e.preventDefault();
    try {
      const data = {
        first_Name: first_Name,
        last_Name: last_Name,
        phone: phone,
        gender: gender,
        current_status: status
      }
      const body = { data };
      
      const response = await axios.put(
        `http://localhost:5000/api/admin/users/${user.id}`,
        {
          headers: {
            "Authorization": authHeader(),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: body.data })
        },
      );
      console.log(response)
      // window.location = "/table";
    } catch (err) {
      console.error(err.message);
    }
  };
  // const UpdateUser = async e => {
  //   e.preventDefault();
  //   try {
  //     const data = {
  //       first_Name: first_Name,
  //       last_Name: last_Name,
  //       phone: phone,
  //       gender: gender,
  //       current_status: status
  //     }
  //     await Axios.put(`http://localhost:5000/api/admin/users/${user.id}`,
  //       {
  //         headers: {
  //           "Authorization": authHeader(),
  //           "Content-Type": "application/json",
  //         }
  //       },
  //     )
  //   // window.location = "/table";

  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ color: 'white' }} data-bs-target={`#id${user.id}`}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <form onSubmit={UpdateUser}>

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

          {/* <TextField
            margin="normal"
            id="date"
            onChange={(e) => set_date_of_birth(e.target.value)}
            fullWidth
            name="date of birth"
            type="date"
            value={date_of_birth}
          /> */}

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
            name="Gender"
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
            onChange={(e) => set_status(e.target.value)}
            value={status}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: 'white' }}>Cancel</Button>
          <Button onClick={e => UpdateUser(e)} style={{ color: 'white' }}>Save</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
