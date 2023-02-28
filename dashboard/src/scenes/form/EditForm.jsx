import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useState } from "react";
import Axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
const theme = createTheme();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditForm({ user }) {
  const navigate = useNavigate();
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: "",
    first_name: "",
    last_name: "",
    phone: "",
    date_of_birth: "",
    verified: ""
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [firstName, setFirstName] = useState('');
  const [id, setUserID] = useState('');
  const [verified, setVerified] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  function onChangeFirstName(e) {
    setFirstName(e.target.value)
  }
  const handleSubmit1 = async e => {
    e.preventDefault()
    try {
      const body = { id, firstName, lastName, email, phone, dateOfBirth, gender };
      const response = await fetch(`http://localhost:5000/api/admin/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),

      });
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        // data-bs-target={`${user.id}`}
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="lg">
          <Box
            sx={{
              marginTop: 8,
            }}
          >
            <Grid container>
              <CssBaseline />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Edit User Account
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit1}
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      id="userid"
                      label="Id"
                      name="user_id"
                      value={id}
                      onChange={(e) => setUserID(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      id="first_name"
                      label="First Name"
                      name="first_name"
                      value={firstName} onChange={onChangeFirstName}
                    />
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      id="last_name"
                      label="Last Name"
                      name="last_name"

                      value={lastName} onChange={(e) => setLastName(e.target.value)}

                    />
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus

                      value={email} onChange={(e) => setEmail(e.target.value)}

                    />
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      id="is_verified"
                      label="Verified"
                      name="verified"
                      value={verified} onChange={(e) => setVerified(e.target.value)}

                    />
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      name="phone"
                      label="Phone"
                      type="number"
                      id="phone"

                      value={phone} onChange={(e) => setPhone(e.target.value)}

                    />
                    <TextField
                      margin="normal"
                      
                      fullWidth
                      name="Date of Birth"
                      type="date"

                      id="date_of_birth"

                      value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}

                    />
                    <TextField
                      margin="normal"
                      
                      name="Gender"
                      type="text"
                      label="gender"
                      id="gender"

                      value={gender} onChange={(e) => setGender(e.target.value)}

                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    // onClick={() => handleSubmit1()}
                    >
                      Add User
                    </Button>

                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
      <ThemeProvider theme={theme}>
        <Grid container component="main" >
          <CssBaseline />
          <Grid item xs={12} sm={12} md={12}  >
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            >
              <Typography component="h1" variant="h5">
                Add user
              </Typography>
              <Box component="form" 
              // onSubmit={handleSubmit}
               sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  
                  fullWidth
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}

                />
                <TextField
                  margin="normal"
                  
                  fullWidth
                  id="last_name"
                  label="last_name"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}

                />
                <TextField
                  margin="normal"
                  
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"


                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                />
                <TextField
                  margin="normal"
                  
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}

                />
                <TextField
                  margin="normal"
                  
                  fullWidth
                  id="date_of_birth"
                  label="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  value={formData.date_of_birth}
                  onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}

                />
                <TextField
                  margin="normal"
                  
                  fullWidth
                  id="gender"
                  label="gender"
                  name="gender"


                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}

                />
                <TextField
                  margin="normal"
                  
                  fullWidth
                  name="phone"
                  label="phone"
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add User
                </Button>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

    </>
  );
}
