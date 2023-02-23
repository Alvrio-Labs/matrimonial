import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "axios";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  useEffect(() => {
        async function fetchData() {
          const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
          setUsers(reqData.data.users)
          console.log(reqData)
        }
        fetchData();
      }, []);
    
  const columns = [

    { field: "id", headerName: "id", flex: 3, },
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
    field: "edit",
    headerName: "Edit",
    flex: 1,
  },
  {
    field: "delete",
    label: "Delete",
    flex: 1,
  }
  ];
return (
  <Box m="20px">
    <Header
      title="CONTACTS"
      subtitle="List of Contacts for Future Reference"
    />
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
      <DataGrid
        rows={users}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  </Box>
);
};

export default Contacts;
