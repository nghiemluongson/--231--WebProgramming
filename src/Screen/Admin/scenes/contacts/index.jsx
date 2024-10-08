import React, { useState, useEffect }  from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../../../component/Admin/data/mockData";
import Header from "../../../../component/Admin/components/Header";
import { useTheme } from "@mui/material";
import axios from 'axios';
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [account, setAccount] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/CarShop_Project/BE/Model/Account-data.php')
      .then(response => setAccount(response.data))
      .catch(error => console.log(error));
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.1},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1, 
    },
    {
      field: "password",
      headerName: "Password",
      flex: 1,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      flex: 0.5,
    },
    {
      field: "birthday",
      headerName: "Birthday",
      flex: 0.6,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 1,
      renderCell: ({ row: { avatar} }) => {
        return (
          <a href={avatar} style={{ textDecoration: "none"}}>Hình ảnh</a>
        );
      },
    },
    {
      field: "security_question",
      headerName: "Question",
      flex: 1,
    },
    {
      field: "security_answer",
      headerName: "Answer",
      flex: 1,
    },

  ];

  return (
    <Box m="20px">
      <Header
        title="Thông tin tài khoản"
      />
      <Box
        m="40px 0 0 0"
        height="85vh"
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
            backgroundColor: "#5941BB",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#5941BB",
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
          rows={account}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
