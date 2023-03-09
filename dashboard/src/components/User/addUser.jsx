import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {  ThemeProvider } from '@mui/material/styles';
import axios from "../api/baseUrl";

import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import authHeader from '../authHeaders';

export default function Form() {
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
    date_of_birth: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const body = {
      email: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
      gender: formData.gender,
      phone: formData.phone,
      date_of_birth: formData.date_of_birth,
    };
    const response =
      // await axios.post(
      //   `http://localhost:5000/api/admin/users`, body,
      //   {
      //     headers: {
      //       "Authorization": authHeader(),
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      await axios.post(
        `users/`, body,
        {
          headers: {
            "Authorization": authHeader(),
            'Content-Type': 'application/json',
          },
        },
      );
    console.log(response)
    console.log(response)
    navigate('/table')
  }
  return (
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add user
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
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
                required
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
                required
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
                required
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
                required
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
                required
                fullWidth
                id="gender"
                label="gender"
                name="gender"


                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}

              />
              <TextField
                margin="normal"
                required
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
  );
}