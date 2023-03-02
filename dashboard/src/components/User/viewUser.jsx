import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useParams } from 'react-router'
import Axios from "axios";
import authHeader from '../authHeaders';

export default function ViewForm({ user }) {
  const { id } = useParams()
  const [open, setOpen] = React.useState(false);
  const [first_Name] = React.useState(user.first_name);
  const [last_Name] = React.useState(user.last_Name);
  const [email] = React.useState(user.email);
  const [phone] = React.useState(user.phone);
  const [gender] = React.useState(user.gender);
  const [date_of_birth] = React.useState(user.date_of_birth);
  const [status] = React.useState(user.status);

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
        Status: status
      }
      console.log(authHeader)
      await Axios.get(`http://localhost:5000/api/admin/users/${id}`,
        { headers: authHeader() },
        data
      )
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ color: 'white' }}>
        View
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>View</DialogTitle>

        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"

            fullWidth
            name="name"
            label="First Name"

            value={first_Name}
          />

          <TextField
            margin="normal"

            fullWidth
            name="name"
            label="Last Name"

            value={last_Name}
          />

          <TextField
            margin="normal"

            fullWidth
            name="email"
            label="Email"

            value={email}
          />

          <TextField
            margin="normal"

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

            value={phone}
          />

          <TextField
            margin="normal"

            fullWidth
            name="gender"
            label="Gender"

            value={gender}
          />

          <TextField
            margin="normal"
            fullWidth
            name="current status"
            label="Status"
            value={status}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}