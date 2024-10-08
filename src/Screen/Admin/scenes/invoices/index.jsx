import React, { useState, useEffect }  from "react";
import {
  Box,
  Typography,
  useTheme,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../../../component/Admin/data/mockData";
import Header from "../../../../component/Admin/components/Header";
import axios from 'axios';
const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/CarShop_Project/BE/Model/BuyHistoryInvoice-data.php')
      .then(response => setInvoices(response.data))
      .catch(error => console.log(error));
  }, []);
  
  const handleInputChange = (e, id, field) => {
    console.log(e.target.value);
    const newData = invoices.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: e.target.value };
      }
      return row;
    });
    setInvoices(newData);
  };

  const handleInputDelete = (id) => {
    // Tạo một bản sao mới của dữ liệu tài khoản (invoices) và loại bỏ phần tử có id trùng khớp
    const updatedData = invoices.filter((row) => row.id !== id);
  
    // Cập nhật state với dữ liệu mới sau khi xóa
    setInvoices(updatedData);
  };

  // const colors = tokens(theme.palette.mode);


  const handleFocus = (e) => {
    e.target.style.backgroundColor = colors.primary[300];
  };
  const handleBlur = (e) => {
    e.target.style.backgroundColor = colors.primary[400];
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const inputStyle = {
    borderRadius: "4px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: colors.primary[400],
    color: colors.grey[100],
    transition: "background-color 0.3s",
    outline: "none",
  };
  const columns = [
    {
      field: "name",
      headerName: "Owner",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "id", 
      headerName: "Customer ID",
      flex: 1,
    },
    {
      field: "car_id",
      headerName: "Car ID",
      flex: 1,
    },    
    {
      field: "car_name",
      headerName: "Car Name",
      flex: 1,
    },
    {
      field: "date_time",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Cost",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Lịch sử giao dịch" />
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
        }}
      >
        <DataGrid rows={invoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
