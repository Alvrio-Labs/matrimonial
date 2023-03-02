import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./authService";
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/table");
        },
        (error) => {
          alert('Wrong Email or Password')
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

return (
  <div>
    {/* <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form> */}
    <Grid container component="main" >
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12}  >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </div>
);
};

export default Login;

// import axios from "axios";
// import { Navigate } from "react-router-dom";
// import { useState } from "react";
// import React  from "react";
// import AuthService from "./authService";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import { Box, Button, Grid, Typography } from "@mui/material";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [navigate, setNavigate] = useState(false);

//   const submit = async e => {
//     e.preventDefault();

//     const { data } = await axios.post('http://localhost:5000/api/login', {
//       email, password
//     });

//     axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

//     setNavigate(true);
//   }

//   if (navigate) {
//     return <Navigate to="/home" />;
//   }

//   // return <main className="form-signin">
//   //     <form onSubmit={submit}>
//   //         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//   //         <div className="form-floating">
//   //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
//   //                    onChange={e => setEmail(e.target.value)}
//   //             />
//   //             <label htmlFor="floatingInput">Email address</label>
//   //         </div>

//   //         <div className="form-floating">
//   //             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
//   //                    onChange={e => setPassword(e.target.value)}
//   //             />
//   //             <label htmlFor="floatingPassword">Password</label>
//   //         </div>

//   //         <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//   //     </form>
//   // </main>
//   return (
//     <div>
//       {/* <form onSubmit={handleLogin}>
//           <h3>Login</h3>
//           <input
//             type="text"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Log in</button>
//         </form> */}
//       <Grid container component="main" >
//         <CssBaseline />
//         <Grid item xs={12} sm={12} md={12}  >
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" onSubmit={submit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}

//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}

//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
// export default Login;
