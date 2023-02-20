import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
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

function TablePaginationActions(props) {
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

function createData(name, first_name, fat) {
  return { name, first_name, fat };
}

// const rows = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Gingerbread', 356, 16.0),
//   createData('Honeycomb', 408, 3.2),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Jelly Bean', 375, 0.0),
//   createData('KitKat', 518, 26.0),
//   createData('Lollipop', 392, 0.2),
//   createData('Marshmallow', 318, 0),
//   createData('Nougat', 360, 19.0),
//   createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
    const [users, setUsers] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   useEffect(() => {
  //   async function fetchData() {
  //     const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
  //     setUsers(reqData.data.users)
  //   }
  //   fetchData();
  // }, [users]);


  useEffect(() => {
    async function fetchData() {
      const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
      setUsers(reqData.data.users)
      console.log(reqData)
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : users
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}

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
  );
}


// import React from 'react'
// import { useState, useEffect } from 'react'
// import Axios from 'axios'

// export const Table = () => {

//   const [users, setUsers] = useState([]);
//   const deleteUser = async (id) => {
//     try {
//       const deleteUser = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
//         method: "DELETE"
//       });
//       setUsers(users.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//   useEffect(() => {
//     async function fetchData() {
//       const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//       setUsers(reqData.data.users)
//     }
//     fetchData();
//   }, [users]);

//   const columns = [
//     {
//       id: '1',
//       name: 'id ',
//     },
//     {
//       id: '2',
//       name: 'First Name',
//     },
//     {
//       id: '3',
//       name: 'Last Name',
//     },
//     {
//       id: '4',
//       name: 'Email',
//     },
//     {
//       id: '5',
//       name: 'PHONE',
//     },
//     {
//       id: '6',
//       name: 'GENDER',
//     },
//     {
//       id: '7',
//       name: 'DATE OF BIRTH	',
//     },
//   ]
//   return (
//     <div>
//       <div className="flex flex-col">
//         <div className="overflow-x-auto">
//           <div className="p-1.5 w-full inline-block align-middle">
//             <div className="overflow-hidden border rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       ID
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       First Name
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Last Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Phone
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Gender
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Date Of Birth
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                     >
//                       Edit
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                     >
//                       Delete
//                     </th>
//                   </tr>
//                 </thead>
//                 <thead className=''>
//                   <tr>
//                     {columns.map((title) => (
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                         {title.name}
//                       </th>
//                     )
//                     )}
//                   </tr>

//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {users.map((user) => (
//                     <>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div key={user.id} className="user">{user.id}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.first_name}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div>{user.last_name}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.email}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.phone}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.gender}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.date_of_birth}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                         <a
//                           className="text-green-500 hover:text-green-700"
//                           href="#"
//                         >
//                           Edit
//                         </a>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                         <button
//                           className="text-red-500 hover:text-red-700"
//                           href="#" onClick={() => deleteUser(user.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </>
//                   ))}

//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { useState } from "react"

// export const Table = () => {
//   let [num, setNum] = useState(1)
//   let [cur, setCur] = useState(1)

//   const pages = [
//     { page: num },
//     { page: num + 1 },
//     { page: num + 2 },
//     { page: num + 3 },
//   ]
//   function Next() {
//     setNum(++num)
//   }
//   function back() {
//     num > 1 && setNum(--num)
//   }
//   return (
//     <>      <div className="flex bg-white rounded-lg font-[Poppins]">
//       <button onClick={back} className="h-12 border-2 border-r-0 border-indigo-600
//                px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
//         <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
//         </svg>
//       </button>
//       {
//         pages.map((pg, i) => (
//           <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-indigo-600
//                w-12 ${cur === pg.page && 'bg-indigo-600 text-white'}`}>{pg.page}</button>
//         ))
//       }
//       <button onClick={Next} className="h-12 border-2  border-indigo-600
//                px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
//         <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
//       </button>
//     </div>
//     </>

//   )
// }



// import React from 'react'
// import { useState, useEffect } from 'react'
// import Axios from 'axios'

// export const Table = () => {

//   const [users, setUsers] = useState([]);
//   const deleteUser = async (id) => {
//     try {
//       const deleteUser = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
//         method: "DELETE"
//       });
//       setUsers(users.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//   useEffect(() => {
//     async function fetchData() {
//       const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//       setUsers(reqData.data.users)
//     }
//     fetchData();
//   }, [users]);

//   const columns = [
//     {
//       id: '1',
//       name: 'id ',
//     },
//     {
//       id: '2',
//       name: 'First Name',
//     },
//     {
//       id: '3',
//       name: 'Last Name',
//     },
//     {
//       id: '4',
//       name: 'Email',
//     },
//     {
//       id: '5',
//       name: 'PHONE',
//     },
//     {
//       id: '6',
//       name: 'GENDER',
//     },
//     {
//       id: '7',
//       name: 'DATE OF BIRTH	',
//     },
//   ]
//   return (
//     <div>
//       <div className="flex flex-col">
//         <div className="overflow-x-auto">
//           <div className="p-1.5 w-full inline-block align-middle">
//             <div className="overflow-hidden border rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       ID
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       First Name
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Last Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Phone
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Gender
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Date Of Birth
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                     >
//                       Edit
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                     >
//                       Delete
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
                  
//                   {
//                     users.map((user) => (
//                       <tr>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.id}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.first_name}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.last_name}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.email}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.phone}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.gender}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.date_of_birth}</td>
//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.first_name}</td>

//                         <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.first_name}</td>
//                       </tr>
//                     ))
//                   }

//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
