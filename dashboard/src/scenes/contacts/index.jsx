// import { Box, Button } from "@mui/material";
// import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";
// import { useEffect, useState } from "react";
// import Axios from "axios";
// import '../../styles.css'

// const Contacts = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [users, setUsers] = useState([]);
//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//   //     setUsers(reqData.data.users)
//   //     console.log(reqData)
//   //   }
//   //   fetchData();
//   // }, []);
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
//   const columns = [

//     // { field: "id", headerName: "id", flex: 3, },
//     {
//       field: "first_name",
//       headerName: "First Name",
//       flex: 1,
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
//       field: "edit",
//       headerName: "Edit",
//       flex: 1,
//     },
//     {
//       field: "delete",
//       label: "Delete",
//       flex: 1,
//     },
//     {
//       // field: "Action",
//       // renderCell: (cellvalues) => {
//       //   return (
//       //     < Button
//       //       color = "white"
//       //       onClick={(e) => {
//       //         // deleteTodo(e, cellvalues)
//       //       }} 
//       //       >Delete</Button>

//       //   )
//       // }
//     }
//   ];
//   const data = useEffect(() => {
//     async function fetchData() {
//       const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//       setUsers(reqData.data.users)
//       console.log(reqData)
//     }
//     fetchData();
//   }, []);


//   return (
//     <Box m="20px">
//       <Header
//         title="Users"
//       />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <button>
//           <a href="/form">
//             Add User
//           </a>
//         </button>
//       </div>
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
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
//           components={{
//             Toolbar: () => {
//               return <GridToolbarContainer>
//                 <GridToolbarFilterButton  />
//               </GridToolbarContainer>

//               // <GridToolbarContainer>
//               //   <GridToolbarExport />
//               // </GridToolbarContainer>

//             }
//           }}

//           // components={{ Toolbar: GridToolbar }}
//           // autoPageSize pagination {...data} 
//           // rowsPerPageOptions={[5, 10, 20]}
//           // pagination
//           // {...data}
//           pagination {...data}
//         // onCellClick={deleteTodo}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Contacts;




import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "axios";
import '../../styles.css'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);

  const handleClick = async (event, cellValues, id) => {
    console.log(cellValues.row);
    try {
      const deleteTodo = fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: "DELETE",
        mode: 'no-cors',

      });
      // fetch(`http://localhost:5000/api/admin/users/${id}`, {
      //       mode: 'no-cors',
      //       method: "delete",
      //       headers: {
      //            "Content-Type": "application/json"
      //       },
      // body: JSON.stringify(ob)
      //  })
      setUsers(users.filter(users => users.id !== id));
      console.log(cellValues.deleteTodo)

    } catch (error) {
      console.log(error.message)
    }
  };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };
  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: "DELETE"
      });
      setUsers(users.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }
  const columns = [

    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
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
      flex: 3,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              <img src={DeleteRoundedIcon} alt="delete"/>
            </Button>
            <Button
              variant="contained"
              color="primary"

            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="primary"
            >
              <a href="/views">
              <img src={DeleteRoundedIcon} alt="delete"/>
              </a>
            </Button>
          </>
        );
      }
    },
    // {
    //   field: "Edit",
    //   renderCell: (cellValues) => {
    //     return (
    //       <Button
    //         variant="contained"
    //         color="primary"

    //       >
    //         Edit
    //       </Button>
    //     );
    //   }
    // },
  ];

  const handleclick = (e, cellvalue) => {
    console.log(cellvalue)
  }
  const datatbale = useEffect(() => {
    async function fetchData() {
      const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
      setUsers(reqData.data.users)
      console.log(reqData)
    }
    fetchData();
  }, []);
  return (
    <Box m="20px">
      <Header
        title="Users"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button>
          <a href="/form">
            Add User
          </a>
        </button>
      </div>
      <Box
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
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          onCellClick={handleCellClick}
          onRowClick={handleRowClick}

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
    </Box>
  );
};

export default Contacts;
