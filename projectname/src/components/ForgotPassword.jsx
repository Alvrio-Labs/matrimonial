import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Axios from 'axios'
import { useState } from "react";
export default function ForgotPassword() {
  const Auth = async (e) => {
    const [email, setEmail] = useState('');

    e.preventDefault();
    try {
      await Axios.post(`http://localhost:5000/api/forget-password`, {
        email: email,
      });

      // e.preventDefault();
      // await Axios.post('http://localhost:5000/api/forget-password', {
      //   email: email,
      // });
    } catch (error) {
      if (error.response) {
        console.log(error)
      }
    }
  }

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          {/* <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          /> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
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
                Forgot Password
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={Auth}
                sx={{ mt: 1 }}
              >
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  required= {true}
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Reset Code
                </Button>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}