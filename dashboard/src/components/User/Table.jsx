// import { Box, Button } from "@mui/material";
// import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import Header from "../Header";
// import { useTheme } from "@mui/material";
// import { useEffect, useState } from "react";
// import User from "../authUserLink";
// import AuthService from "../authService";
// import { useNavigate, Link } from "react-router-dom";
// import ViewForm from "./viewUser";
// import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import axios from "axios";

// import authHeader from "../authHeaders";
// import Form from "./editUser";
// const Contacts = () => {
//   const navigate = useNavigate();

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [users, setUsers] = useState([]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/admin/users/${id}`, { headers: authHeader() })
//       setUsers(users.filter(user => user.id !== id));
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   const handleEdit = async (id) => {
//     // try {
//     //   const userInfo = await axios.put(`http://localhost:5000/api/admin/users/${id}`, { headers: authHeader() })
//     //   setUsers(userInfo);
//     // } catch (error) {
//     //   console.log(error.message)
//     // }
//     // <a href="/edit"></a>
//     // <Link to='/form'></Link>
//   }

//   const handleView = async (id) => {
//     <ViewForm user={users}>View</ViewForm>

//   }
//   const columns = [

//     {
//       field: "first_name",
//       headerName: "First Name",
//       flex: 1,
//       editable: true
//     },
//     {
//       field: "last_name",
//       headerName: "Last Name",
//       flex: 1,
//     },
//     {
//       field: "phone",
//       headerName: "Phone",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       flex: 1,
//     },
//     {
//       field: "gender",
//       headerName: "Gender",
//       flex: 1,
//     },
//     {
//       field: "date_of_birth",
//       flex: 1,
//       headerName: "Date of birth",
//     },
//     {
//       field: "Actions",
//       flex: 2,
//       renderCell: (user) => {
//         return (
//           <>
//             <Button>
//               <ViewForm user={user?.row} />
//             </Button>
//             <Button>
//               <Form user={user} />
//             </Button>
//             <Button>
//               <DeleteIcon style={{ color: 'white' }} onClick={() => handleDelete(user.id)}
//               >

//               </DeleteIcon>
//             </Button>

//           </>
//         );
//       }
//     },
//   ];

//   useEffect(() => {
//     User.getAllUser().then(
//       (response) => {
//         setUsers(response.data.users);
//       },
//       (error) => {
//         if (error.response && error.response.status === 403) {
//           AuthService.logout();
//           navigate("/");
//         }
//       }
//     );
//   }, []);
//   return (
//     <Box mx="10px">
//       <Header
//         title="Users"
//       />
//       <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', top: '28px' }}>
//         <Button>
//           <a href="/form">
//             Add User

//           </a>
//           {/* <Link to="/form">
//           </Link> */}
//         </Button>
//       </div>
//       <Box
//         height="82vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={users}
//           columns={columns}
//           pageSize={10}
//           components={{
//             Toolbar: () => {
//               return <GridToolbarContainer>
//                 <GridToolbarFilterButton />
//                 <GridToolbarExport />
//               </GridToolbarContainer>
//             }
//           }}
//         />
//       </Box>
//     </Box >
//   );
// };

// export default Contacts;


import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import User from "../authUserLink";
import AuthService from "../authService";
import { useNavigate, Link } from "react-router-dom";
import ViewForm from "./viewUser";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

import authHeader from "../authHeaders";
import Form from "./editUser";
const Contacts = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${id}`, { headers: authHeader() })
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleEdit = async (id) => {
    // try {
    //   const userInfo = await axios.put(`http://localhost:5000/api/admin/users/${id}`, { headers: authHeader() })
    //   setUsers(userInfo);
    // } catch (error) {
    //   console.log(error.message)
    // }
    // <a href="/edit"></a>
    // <Link to='/form'></Link>
  }

  const handleView = async (id) => {
    <ViewForm user={users}>View</ViewForm>

  }
  const columns = [

    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
      editable: true
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "date_of_birth",
      flex: 1,
      headerName: "Date of birth",
    },
    {
      field: "Actions",
      flex: 2,
      renderCell: (user) => {
        return (
          <>
            <Button>
              <ViewForm user={user?.row} />
            </Button>
            <Button>
              <Form user={user?.row} />
            </Button>
            <Button>
              <DeleteIcon style={{ color: 'white' }} onClick={() => handleDelete(user.id)}
              >

              </DeleteIcon>
            </Button>

          </>
        );
      }
    },
  ];

  useEffect(() => {
    User.getAllUser().then(
      (response) => {
        setUsers(response.data.users);
      },
      (error) => {
        if (error.response && error.response.status === 403) {
          AuthService.logout();
          navigate("/");
        }
      }
    );
  }, []);
  return (
    <Box mx="10px">
      <Header
        title="Users"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', top: '28px' }}>
        <Button>
          <a href="/form">
            Add User

          </a>
          {/* <Link to="/form">
          </Link> */}
        </Button>
      </div>
      <Box
        height="82vh"
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
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          components={{
            Toolbar: () => {
              return <GridToolbarContainer>
                <GridToolbarFilterButton />
                <GridToolbarExport />
              </GridToolbarContainer>
            }
          }}
        />
      </Box>
    </Box >
  );
};

export default Contacts;

// import { Box, Typography, useTheme } from "@mui/material";
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import { useState, useEffect } from 'react'
// import Axios from 'axios'
// import { Button } from '@mui/material';
// import Modal from '@mui/material/Modal';
// import { Link } from "react-router-dom";
// import authHeader from "../authHeaders";
// import User from "../authUserLink";

// import { useNavigate } from "react-router-dom";
// // import EditForm from "../form/EditForm";
// // import View from "../views";
// // import ViewForm from "../views";
// import ViewForm from "./viewUser";

// function TablePaginationActions(props) {
//   const navigate = useNavigate();
//   const BasicModal = {

//   }
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };


// export default function Tables() {
//   const [users, setUsers] = useState([]);

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };


//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//   //     setUsers(reqData.data.users)
//   //     console.log(reqData)
//   //   }
//   //   fetchData();
//   // }, []);
//   useEffect(() => {
//     User.getAllUser().then(
//       (response) => {
//         setUsers(response.data.users);
//       },
//       (error) => {
//         console.log(error)
//       }
//     );
//   }, []);

//   const deleteUser = async (id) => {
//     try {
//       await Axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
//         method: "DELETE",
//         mode: "no-cors",

//       });
//       setUsers(users.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   const columns = [
//     {
//       id: "firstName",
//       label: "First Name",
//     },
//     {
//       id: "lastName",
//       label: "Last Name",
//     },
//     {
//       id: "phone",
//       label: "Phone",
//     },
//     {
//       id: "email",
//       label: "Email",
//     },
//     {
//       id: "gender",
//       label: "Gender",
//     },
//     {
//       id: "date_of_birth",
//       label: "Date of birth",
//     },
//     {
//       id: "current_status",
//       label: "status"
//     },
//     {
//       id: "view",
//       label: "View",
//     },
//     {
//       id: "edit",
//       label: "Edit",
//     },
//     {
//       id: "delete",
//       label: "Delete",
//     }
//   ];
//   return (
//     <>
//       <table>
//         <TableContainer component={Paper}>
//           <TableRow>
//             {columns.map(column => (
//               <TableCell
//                 key={column.id} style={{ width: 160 }} align="center"
//               >
//                 {column.label}
//               </TableCell>
//             ))}
//           </TableRow>

//           <Table sx={{ minWidth: 400 }} aria-label="custom pagination table">
//             <TableBody>

//               <tr>
//                 {(rowsPerPage > 0
//                   ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   : users
//                 ).map((user) => (
//                   // <td>{user.id}</td>
//                   <TableRow key={user.id}>
//                     {/* <TableCell component="th" scope="user">
//                       {user.id}
//                     </TableCell> */}
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.first_name}
//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.last_name}
//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.phone}
//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.email}
//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.gender}
//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.date_of_birth}
//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {user.status}
//                     </TableCell>

//                     <TableCell style={{ width: 160 }} align="center">
//                       <Button ><ViewForm user={user} /></Button>
//                       {/* <Button style={{ color: 'white' }} >Edit</Button> */}

//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       {/* <Button ><EditForm user={user} /></Button> */}
//                       {/* <Button style={{ color: 'white' }} >Edit</Button> */}

//                     </TableCell>

//                     <TableCell style={{ width: 160 }} align="center" >
//                       <Button style={{ color: 'white' }} onClick={() => deleteUser(user.id)}>Delete</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </tr>
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                   colSpan={3}
//                   count={users.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   SelectProps={{
//                     inputProps: {
//                       'aria-label': 'rows per page',
//                     },
//                     native: true,
//                   }}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActions}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </table>
//     </>
//   );
// }

