
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { Container, useTheme } from "@mui/material";
import Header from "../../components/Header";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Alvrio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Form({ User }) {

  const [user, setUser] = useState();
  const data = useEffect(() => {
    async function fetchData() {
      // const reqData = await axios
      //   .get(`http://localhost:5000/api/admin/users/${User.id}`)

      const reqData = await axios
        .get(`http://localhost:5000/api/admin/users/9034edba-9b4c-4526-8b1e-b32ba3cc1498`)
      setUser(reqData.data.user)
      console.log(user.first_name)
    }
    fetchData();
  }, []);

  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" >
        <CssBaseline />
        <Grid item xs={12} sm={12} md={12}  >
          <Box
            mx="10px"
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
            <Header
              title="User"
            />

            <Box component="form" sx={{ mt: 1 }}>
              {user &&

                <div>
                  <TextField
                    margin="normal"

                    fullWidth
                    id="first_name"
                    label="First Name"
                    name="first_name"
                    type="text"
                    value={user.first_name}
                  />
                  <TextField
                    margin="normal"

                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    type="text"
                    value={user.last_name}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={user.email}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="date_of_birth"
                    name="date_of_birth"
                    label="Date of Birth"
                    type="text"
                    value={user.date_of_birth}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    value={user.gender}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="number"
                    id="phone"
                    value={user.phone}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <a href='/users'>Back</a>
                  </Button>

                </div>

              }
              <Copyright sx={{ mt: 5 }} />
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}