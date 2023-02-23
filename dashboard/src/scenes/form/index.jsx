// import { Box, Button, TextField } from "@mui/material";
// import { Formik, Field } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import axios from "axios";

// const Form = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = async (user) => {
//     // console.log(values);
//     try {
//       // const body = { id, firstName, lastName, email, phone, dateOfBirth, gender };
//       const response = await axios.create(`http://localhost:5000/api/admin/users`, {
//         // method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(),

//       });
//       // console.log(body)

//       console.log(response)
//       // window.location = "/";

//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//     return (
//       <Box m="20px">
//         <Header title="CREATE USER" subtitle="Create a New User Profile" />

//         <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={initialValues}
//           validationSchema={checkoutSchema}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleBlur,
//             handleChange,
//             handleSubmit,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <Box
//                 display="grid"
//                 gap="30px"
//                 gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                 sx={{
//                   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                 }}
//               >
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="First Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.first_name}
//                   name="firstName"
//                   error={!!touched.firstName && !!errors.firstName}
//                   helperText={touched.firstName && errors.firstName}
//                   sx={{ gridColumn: "span 2" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Last Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.las_name}
//                   name="lastName"
//                   error={!!touched.lastame && !!errors.lastName}
//                   helperText={touched.lastName && errors.lastName}
//                   sx={{ gridColumn: "span 2" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Email"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.email}
//                   name="email"
//                   error={!!touched.email && !!errors.email}
//                   helperText={touched.email && errors.email}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Contact Number"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.phone}
//                   name="contact"
//                   error={!!touched.contact && !!errors.contact}
//                   helperText={touched.contact && errors.contact}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="Date"
//                   label="Date of birth"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.date_of_birth}
//                   name="address1"
//                   error={!!touched.address1 && !!errors.address1}
//                   helperText={touched.address1 && errors.address1}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 <div role="group" aria-labelledby="my-radio-group">
//                   <label>
//                     <Field type="radio" name="gender" value={values.gender} />
//                     Male
//                   </label>
//                   <label>
//                     <Field type="radio" name="gender" value={values.gender} />
//                     Female
//                   </label>

//                 </div>
//               </Box>
//               <Box display="flex" justifyContent="end" mt="20px">
//                 <Button type="submit" color="secondary" variant="contained">
//                   Create New User
//                 </Button>
//               </Box>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     );
//   };

//   const phoneRegExp =
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//   const checkoutSchema = yup.object().shape({
//     first_name: yup.string().required("required"),
//     last_name: yup.string().required("required"),
//     email: yup.string().email("invalid email").required("required"),
//     phone: yup
//       .string()
//       .matches(phoneRegExp, "Phone number is not valid")
//       .required("required"),
//     // gender: yup.required("required"),
//     // date_of_birth: yup.DateSchema.required("required"),
//   });
//   const initialValues = {
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     gender: "",
//     date_of_birth: "",
//   };

//   export default Form;



import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import image1 form '../images/6343825.jpg'
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

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
 
  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(formData);
 
    axios
      .post("http://localhost:5000/api/admin/users", {
        email: formData.email,
        password: formData.password,
        first_name:formData.first_name ,
        last_name:formData.last_name ,
        gender:formData.gender ,
        phone:formData.phone ,
        date_of_birth:formData.date_of_birth ,
      })
      .then(function (response) {
        console.log(response);
        navigate('/contacts'); 
      })
      .catch(function (error) {
        console.log(error);
      });
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

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}