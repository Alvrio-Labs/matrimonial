// import React, { useState, useEffect } from 'react';
// // import MaterialTable from 'material-table'
// import { DataGrid } from '@mui/x-data-grid';

// const Footer = () => {
//   const [data, setData] = useState([])
//   const columns = [
//     { title: "ID", field: "id" },
//     { title: "Username", field: "username" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "Phone", field: "phone" },
//     { title: "Web Link", field: 'website' }
//   ]
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(resp => resp.json())
//       .then(resp => {
//         setData(resp)
//       })
//   }, [])

//   return (
//     <div className="App">
//       <h1 align="center">React-App</h1>
//       <h4 align='center'>Material Table</h4>
//       <DataGrid
//         title="Employee Data"
//         data={data}
//         columns={columns}
//       />
//     </div>
//   );
// }

// export default Footer


import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
    <div>
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  
    </div>

    </>
  )
}

export default Footer

// import React, { FC, ReactElement } from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// export const Footer: FC = (): ReactElement => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "auto",
//         backgroundColor: "secondary.main",
//         paddingTop: "1rem",
//         paddingBottom: "1rem",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container direction="column" alignItems="center">
//           <Grid item xs={12}>
//             <Typography color="black" variant="h5">
//               React Starter App
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography color="textSecondary" variant="subtitle1">
//               {`${new Date().getFullYear()} | React | Material UI | React Router`}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;