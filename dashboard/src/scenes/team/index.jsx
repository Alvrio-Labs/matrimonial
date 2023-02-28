// import { Box, Typography, useTheme } from "@mui/material";
// import * as React from 'react';
// import PropTypes from 'prop-types';
// // import { useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
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
// // import BasicModal from './EditForm';

// function TablePaginationActions(props) {
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


// export default function Team() {
//   const [users, setUsers] = useState([]);
//   const [searched, setSearched] = useState("");
//   const requestSearch = (string) => {
//     const filteredRows = users.filter((row) => {
//       return row.name.toLowerCase();
//     });
//     setUsers(filteredRows);
//   };

//   const cancelSearch = () => {
//     setSearched("");
//     requestSearch(searched);
//   };

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


//   useEffect(() => {
//     async function fetchData() {
//       const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//       setUsers(reqData.data.users)
//       console.log(reqData)
//     }
//     fetchData();
//   }, []);

//   const deleteTodo = async (id) => {
//     try {
//       const deleteTodo = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
//         method: "DELETE"
//       });
//       setUsers(users.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
// const columns = [
//   { id: "name", label: "id", },
//   {
//     id: "firstName",
//     label: "First Name",
//   },
//   {
//     id: "lastName",
//     label: "Last Name",
//   },
//   {
//     id: "phone",
//     label: "Phone",
//   },
//   {
//     id: "email",
//     label: "Email",
//   },
//   {
//     id: "gender",
//     label: "Gender",
//   },
//   {
//     id: "date_of_birth",
//     label: "Date of birth",
//   },
//   {
//     id: "edit",
//     label: "Edit",
//   },
//   {
//     id: "delete",
//     label: "Delete",
//   }
// ];
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
//                   <TableRow key={user.createData}>
//                     <TableCell component="th" scope="user">
//                       {user.id}
//                     </TableCell>
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
//                       {/* <Button ><BasicModal todo={user} /></Button> */}
//                       <Button >Edit</Button>

//                     </TableCell>
//                     <TableCell style={{ width: 160 }} align="center">
//                       <Button onClick={() => deleteTodo(user.id)}>Delete</Button>
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




import React, { useState, useEffect } from 'react';

import { forwardRef } from 'react';
// import Avatar from 'react-avatar';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';

// import MaterialTable from "material-table";
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
// import Alert from '@material-ui/lab/Alert';

// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };

const api = axios.create({
  baseURL: `http://localhost:5000/api/admin`
})


function validateEmail(email) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

function Team() {

  // var columns = [
  //   {title: "id", field: "id", hidden: true},
  //   {title: "First name", field: "name"},
  //   {title: "Last name", field: "lname"},
  //   {title: "email", field: "email"},
  //   {title: "phone", field: "phone"}
  // ]
  const columns = [
    { id: "name", label: "id", },
    {
      id: "firstName",
      label: "First Name",
    },
    {
      id: "lastName",
      label: "Last Name",
    },
    {
      id: "phone",
      label: "Phone",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "gender",
      label: "Gender",
    },
    {
      id: "date_of_birth",
      label: "Date of birth",
    },
    {
      id: "edit",
      label: "Edit",
    },
    {
      id: "delete",
      label: "Delete",
    }
  ];
  const [data, setData] = useState([]); //table data

  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  useEffect(() => {
    api.get("/users")
      .then(res => {
        setData(res.data.data)
      })
      .catch(error => {
        console.log("Error")
      })
  }, [])

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
    if (newData.first_name === "") {
      errorList.push("Please enter first name")
    }
    if (newData.last_name === "") {
      errorList.push("Please enter last name")
    }
    if (newData.email === "" || validateEmail(newData.email) === false) {
      errorList.push("Please enter a valid email")
    }

    if (errorList.length < 1) {
      api.patch("/users/" + newData.id, newData)
        .then(res => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()

        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }

  }

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if (newData.first_name === undefined) {
      errorList.push("Please enter first name")
    }
    if (newData.last_name === undefined) {
      errorList.push("Please enter last name")
    }
    if (newData.email === undefined || validateEmail(newData.email) === false) {
      errorList.push("Please enter a valid email")
    }

    if (errorList.length < 1) { //no error
      api.post("/users", newData)
        .then(res => {
          let dataToAdd = [...data];
          dataToAdd.push(newData);
          setData(dataToAdd);
          resolve()
          setErrorMessages([])
          setIserror(false)
        })
        .catch(error => {
          setErrorMessages(["Cannot add data. Server error!"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  const handleRowDelete = (oldData, resolve) => {
    api.delete("/users/" + oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }

  return (
    <div className="App" style={{ marginTop: "60px" }}>
      <h2 style={{ textAlign: "center" }}>
        Student Details
      </h2>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          {/* <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div> */}
          <Table mt={90}
            title="Student Details"
            columns={columns}
            data={data}
            // icons={tableIcons}
            options={{
              headerStyle: { size: '80px' }
            }}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  handleRowUpdate(newData, oldData, resolve);

                }),
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  handleRowAdd(newData, resolve)
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  handleRowDelete(oldData, resolve)
                }),
            }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default Team;