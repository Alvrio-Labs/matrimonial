import { Box, Typography, useTheme } from "@mui/material";
import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function TablePaginationActions(props) {
  const navigate = useNavigate();
  const BasicModal = {


  }
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function Team() {
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (string) => {
    const filteredRows = users.filter((row) => {
      return row.name.toLowerCase();
    });
    setUsers(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  useEffect(() => {
    async function fetchData() {
      const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
      setUsers(reqData.data.users)
      console.log(reqData)
    }
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: "DELETE"
      });
      setUsers(users.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }
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
  return (
    <>

      <table>
        <TableContainer component={Paper}>
          <TableRow>
            {columns.map(column => (
              <TableCell
                key={column.id} style={{ width: 160 }} align="center"
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>

          <Table sx={{ minWidth: 400 }} aria-label="custom pagination table">
            <TableBody>

              <tr>
                {(rowsPerPage > 0
                  ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : users
                ).map((user) => (
                  // <td>{user.id}</td>
                  <TableRow key={user.createData}>
                    <TableCell component="th" scope="user">
                      {user.id}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {user.first_name}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {user.last_name}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {user.phone}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {user.email}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {user.gender}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {user.date_of_birth}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {/* <Button ><BasicModal todo={user} /></Button> */}
                      <Button style={{ color: 'white' }} >Edit</Button>

                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center" >
                      <Button style={{ color: 'white' }} onClick={() => deleteUser(user.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </tr>
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </table>
    </>
  );
}
