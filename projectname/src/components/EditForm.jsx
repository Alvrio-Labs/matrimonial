// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
// // import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControl from '@mui/material/FormControl';
// import Radio from '@mui/material/Radio';
// import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import Axios from "axios";

// export default function EditUser() {
//   const [firstName, setFirstName] = useState('');
//   const [id, setUserID] = useState('');

//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [gender, setGender] = useState('');
//   function onChangeFirstName(e) {
//     setFirstName(e.target.value)
//   }
//   const onSubmit = async e => {
//     e.preventDefault()
//     try {
//       const body = { firstName, lastName, email, phone, password, dateOfBirth, gender };
//       const response = await Axios.post('http://localhost:5000/api/admin/users', {
//         // method: "POST",
//         // headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });
//       console.log(response)
//       // window.location = "/";

//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   const handleSubmit = async (e) => {
//     // alert('A form was submitted: ');
//     e.preventDefault();
//     const body = { firstName, lastName, email, phone, password, dateOfBirth, gender };

//     const data = await fetch('http://localhost:5000/api/admin/users', {
//         method: 'POST',
//         // We convert the React state to JSON and send it as the POST body
//         // body: JSON.stringify(data)
//         body: JSON.stringify(body)

//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });

// }
// const handleSubmit1 = async e => {
//   e.preventDefault()
//   try {
//     const body = { id, firstName, lastName, email, phone, password, dateOfBirth, gender };
//     const response = await fetch('http://localhost:5000/api/admin/users/${user.id}' , {
//       method:"PUT",
//       headers: { "Content-Type": "application/json"},
//       body: JSON.stringify(body),

//     });
//     // console.log(body)

//     console.log(response)
//     // window.location = "/";

//   } catch (error) {
//     console.log(error.message)
//   }
// }

//   return (
//     <Container component="main" maxWidth="lg">
//       <Box
//         sx={{
//           marginTop: 8,
//         }}
//       >
//         <Grid container>
//           <CssBaseline />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={6}
//             square
//           >
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 Add User Account
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit1}
//                 sx={{ mt: 1 }}
//               >
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="userid"
//                   label="Id"
//                   name="user_id"
//                   value={id}
//                   onChange={ (e) => setUserID(e.target.value)}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="first_name"
//                   label="First Name"
//                   name="first_name"
//                   value={firstName} onChange={onChangeFirstName}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="last_name"
//                   label="Last Name"
//                   name="last_name"

//                   value={lastName} onChange={ (e) => setLastName(e.target.value)}

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus

//                   value={email} onChange={ (e) => setEmail(e.target.value)}

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"

//                   value={password} onChange={ (e) => setPassword(e.target.value)}

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="phone"
//                   label="Phone"
//                   req={true}
//                   type="number"
//                   id="phone"

//                   value={phone} onChange={ (e) => setPhone(e.target.value)}

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="Date of Birth"
//                   type="date"
                  
//                   id="date_of_birth"

//                   value={dateOfBirth} onChange={ (e) => setDateOfBirth(e.target.value)}

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   name="Gender"
//                   type="text"
//                   label="gender"
//                   id="gender"

//                   value={gender} onChange={ (e) => setGender(e.target.value)}

//                 />
//                 {/* <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="Gender"
//                   label="gender"
//                   type="radio"
//                   id="gender"
//                 /> */}
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }} 
//                   // onClick={() => handleSubmit1()}
//                 >
//                   Add User
//                 </Button>

//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [firstName, setFirstName] = useState('');
  const [id, setUserID] = useState('');

  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [password, setPassword] = useState(user.password);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  function onChangeFirstName(e) {
    setFirstName(e.target.value)
  }
//   const onSubmit = async e => {
//     e.preventDefault()
//     try {
//       const body = { firstName, lastName, email, phone, dateOfBirth, gender };
//       const response = await Axios.post(`http://localhost:5000/api/admin/users/${user.id}`, {
//         // http://localhost:5000/todos/${todo.id}
//         // method: "POST",
//         // headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });
//       console.log(response)
//       // window.location = "/";

//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   const handleSubmit = async (e) => {
//     // alert('A form was submitted: ');
//     e.preventDefault();
//     const body = { firstName, lastName, email, phone,  dateOfBirth, gender };

//     const data = await fetch('http://localhost:5000/api/admin/users', {
//         method: 'POST',
//         // We convert the React state to JSON and send it as the POST body
//         // body: JSON.stringify(data)
//         body: JSON.stringify(body)

//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });

// }
const handleSubmit1 = async e => {
  e.preventDefault()
  try {
    const body = { id, firstName, lastName, email, phone,  dateOfBirth, gender };
    const response = await fetch(`http://localhost:5000/api/admin/users/${user.id}` , {
      method:"PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body),

    });
    // console.log(body)

    console.log(response)
    // window.location = "/";

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
        data-bs-target={`#id${user.id}`}
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
                Add User Account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit1}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userid"
                  label="Id"
                  name="user_id"
                  value={id}
                  onChange={ (e) => setUserID(e.target.value)}
                />
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
                  name="Gender"
                  type="text"
                  label="gender"
                  id="gender"

                  value={gender} onChange={ (e) => setGender(e.target.value)}

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
    </>
  );
 }