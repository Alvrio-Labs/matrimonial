import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import User from "../authUserLink";
import { useNavigate } from "react-router-dom";
import ViewForm from "./viewUser";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "../api/baseUrl";


import authHeader from "../authHeaders";
import Form from "./editUser";
const Contacts = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`users/${id}`, {
        headers:
          { "Authorization": authHeader() }
      })
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error.message)
    }
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', top: '7px' }}>
        <button>
          <a href="/form">
            Add User
          </a>
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

