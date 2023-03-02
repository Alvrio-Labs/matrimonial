import { Box } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import User from "../authUserLink";
import AuthService from "../authService";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const logOut = () => {
    AuthService.logout();
  };
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);

  // const handleClick = async (id) => {
  //   // console.log(cellValues.row);
  //   try {
  //     await fetch(`http://localhost:5000/api/admin/users/${id}`, {
  //       method: "DELETE",
  //     });
  //     // console.log(users.id)
  //     setUsers(users.filter(user => user.id !== id));

  //   } catch (error) {
  //     console.log(error.message)
  //   }

  // };

  // const handleCellClick = (param, event) => {
  //   event.stopPropagation();
  // };

  // const handleRowClick = (param, event) => {
  //   event.stopPropagation();
  // };
  // const deleteUser = async (id) => {
  //   try {
  //     const deleteUser = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
  //       method: "DELETE"
  //     });
  //     setUsers(users.filter(user => user.id !== id));
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
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
    // {
    //   field: "Actions",
    //   flex: 2,
    //   renderCell: (cellValues) => {
    //     return (
    //       <>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           onClick={(event) => {
    //             handleClick(event, cellValues);
    //           }}
    //         >
    //           Delete
    //         </Button>
    //         <Button
    //           variant="contained"
    //           color="primary"

    //         >
    //           < Link to={`/edit/${users.id}`}>
    //             Edit
    //           </Link>
    //         </Button>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //         >
    //           <ViewForm user={users}>View</ViewForm>
    //         </Button>
    //       </>
    //     );
    //   }
    // },
  ];

  useEffect(() => {
    User.getAllUser().then(
      (response) => {
        console.log("users 1", response.data.users)
        setUsers(response.data.users);
      },
      (error) => {
        console.log("Private page", error.response);
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
        <button onClick={logOut}>
            Add User
        </button>
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


