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
// import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import Axios from "axios";

export default function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  function onChangeFirstName(e) {
    setFirstName(e.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const onSubmit = async e => {
    e.preventDefault()
    try {
      const body = { firstName, lastName, email, phone, password, dateOfBirth, gender };
      const response = await Axios.post('http://localhost:5000/api/admin/users', {
        // method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)

      });
      console.log(response)
      // window.location = "/";

    } catch (error) {
      console.log(error.message)
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
                Add User Account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  value={firstName} onChange={onChangeFirstName}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"

                  value={lastName} onChange={ (e) => setLastName(e.target.value)}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus

                  value={email} onChange={ (e) => setEmail(e.target.value)}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"

                  value={password} onChange={ (e) => setPassword(e.target.value)}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  req={true}
                  type="number"
                  id="phone"

                  value={phone} onChange={ (e) => setPhone(e.target.value)}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Date of Birth"
                  type="date"
                  id="date_of_birth"

                  value={dateOfBirth} onChange={ (e) => setDateOfBirth(e.target.value)}

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Gender"
                  type="text"
                  id="gender"

                  value={gender} onChange={ (e) => setGender(e.target.value)}

                />
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Gender"
                  label="gender"
                  type="radio"
                  id="gender"
                /> */}
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
      </Box>
    </Container>
  );
}


// // 	"phone" : "1223456780",
// // 	"gender" : "Female",
// // 	"date_of_birth" :"10-10-2002" ,


// ** create-user.component.js ** //
// import React, { Component } from 'react';
// import axios from 'axios';
// export default class AddUser extends Component {
//     constructor(props) {
//         super(props)
//         this.onChangeUserName = this.onChangeUserName.bind(this);
//         this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             name: '',
//             email: ''
//         }
//     }
//     onChangeUserName(e) {
//         this.setState({ name: e.target.value })
//     }
//     onChangeUserEmail(e) {
//         this.setState({ email: e.target.value })
//     }
//     onSubmit(e) {
//         e.preventDefault()
//         const userObject = {
//             name: this.state.name,
//             email: this.state.email
//         };
//         axios.post('http://localhost:4000/users/create', userObject)
//             .then((res) => {
//                 console.log(res.data)
//             }).catch((error) => {
//                 console.log(error)
//             });
//         this.setState({ name: '', email: '' })
//     }

//     render() {
//         return (
//             <div className="wrapper">
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Add User Name</label>
//                         <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
//                     </div>
//                     <div className="form-group">
//                         <label>Add User Email</label>
//                         <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Create User" className="btn btn-success btn-block" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
