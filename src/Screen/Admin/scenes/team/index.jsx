import React, { useState, useEffect } from "react";
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
import { mockDataTeam } from "./../../../../component/Admin/data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockClockIcon from "@mui/icons-material/LockClock";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../../component/Admin/components/Header";
import axios from "axios";

const Team = () => {
    //=========================================================================================================
    const apiUrl = 'http://localhost/CarShop_Project/BE/Controller/Account_Controller.php';

    // Function to update an account
    const updateAccount = async (id, name, email, phoneNumber, password) => {
      try {
        const response = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            name: name,
            email: email,
            phone_number: phoneNumber,
            password: password,
          }),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Account updated successfully:', data);
        } else {
          console.error('Failed to update account.');
        }
      } catch (error) {
        console.error('Error updating account:', error);
      }
    };
    
    // Function to delete an account
    const deleteAccount = async (id) => {
      try {
        const response = await fetch(apiUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
          }),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Account deleted successfully:', data);
        } else {
          console.error('Failed to delete account.');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    };
    
    // // Call the functions
    // updateAccount(1, 'New Name', 'newemail@example.com', '123456789', 'newpassword');
    // deleteAccount(1); // Change the ID accordingly
    
      //=========================================================================================================
  const [account, setAccount] = useState([]);
  //=========================================================================================================
  // Function to fetch account data from the API
  // const fetchAccountData = async () => {
  //   try {
  //     const response = await fetch(apiUrl);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setAccount(data); // Update account state with fetched data
  //     } else {
  //       console.error('Failed to fetch account data');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching account data:', error);
  //   }
  // };

  // // Call the fetchAccountData function when the component mounts
  // useEffect(() => {
  //   fetchAccountData();
  // }, []); 
  
  useEffect(() => {
    axios
      .get("http://localhost/CarShop_Project/BE/Model/Account-data.php")
      .then((response) => setAccount(response.data))
      .catch((error) => console.log(error));
  }, []);
  //=========================================================================================================
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleInputChange = (e, id, field) => {
    console.log(e.target.value);
    const newData = account.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: e.target.value };
      }
      return row;
    });
    setAccount(newData);
  };

  const handleInputDelete = (id) => {
    // Tạo một bản sao mới của dữ liệu tài khoản (account) và loại bỏ phần tử có id trùng khớp
    const updatedData = account.filter((row) => row.id !== id);
  
    // Cập nhật state với dữ liệu mới sau khi xóa
    setAccount(updatedData);
  };

  const handleRoleChange = (event, newRole, row) => {
    if (newRole !== null) {
      handleInputChange({ target: { value: newRole } }, row.id, 'role');
    }
  };

  const inputStyle = {
    borderRadius: "4px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: colors.primary[400],
    color: colors.grey[100],
    transition: "background-color 0.3s",
    outline: "none",
  };
  const handleFocus = (e) => {
    e.target.style.backgroundColor = colors.primary[300];
  };
  const handleBlur = (e) => {
    e.target.style.backgroundColor = colors.primary[400];
  };
  

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Tên",
      // editable: true,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.name}
            onChange={(e) => handleInputChange(e, row.id, "name")}
            style={inputStyle}
          />
        );
      },
    },  
    {
      field: "phone_number",
      headerName: "Số điện thoại",
      // editable: true,
      flex: 0.6,
      cellClassName: "name-column--cell",
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.phone_number}
            onChange={(e) => handleInputChange(e, row.id, "phone_number")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.email}
            onChange={(e) => handleInputChange(e, row.id, "email")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "password",
      headerName: "Password",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.password}
            onChange={(e) => handleInputChange(e, row.id, "password")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: 'role',
      headerName: 'Access Level',
      flex: 2,
      renderCell: ({ row }) => {
        return (
          <ToggleButtonGroup
            value={row.role}
            exclusive
            onChange={(event, newRole) => handleRoleChange(event, newRole, row)}
            aria-label="access-level"
          >
            <ToggleButton value="admin" aria-label="admin">
              <Box display="flex" alignItems="center">
                <SecurityOutlinedIcon />
                Admin
              </Box>
            </ToggleButton>
            <ToggleButton value="customer" aria-label="customer">
              <Box display="flex" alignItems="center">
                <LockOpenOutlinedIcon />
                Customer
              </Box>
            </ToggleButton>
            <ToggleButton value="blockcustomer" aria-label="blockcustomer">
              <Box display="flex" alignItems="center">
                <LockClockIcon />
                Block Customer
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        const handleUpdate = async () => {
          try {
            console.log(row.password);
            const response = await fetch(
              "http://localhost/CarShop_Project/BE/Model/Update_Team.php",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: row.id,
                  name: row.name,
                  phone_number: row.phone_number,
                  role: row.role,
                  email: row.email,
                  password: row.password,
                }), // Gửi ID cần cập nhật
              }
            );

            if (response.ok) {
              console.log(`Updated row with ID: ${row.id}`);
              // console.log("Failed to update. Status:", response);
              // Cập nhật giao diện hoặc thông báo thành công
            } else {
              console.error("Update failed");

              // Xử lý lỗi nếu cập nhật không thành công
            }
          } catch (error) {
            console.error("Error:", error);
            // Xử lý lỗi nếu có lỗi khi gửi yêu cầu
          }
        };

        const handleDelete = async () => {
          try {
            console.log(row.password);
            const response = await fetch(
              "http://localhost/CarShop_Project/BE/Model/Delete_Team.php",
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: row.id,
                }), 
              }
            );

            if (response.ok) {
              console.log(`Deleted row with ID: ${row.id}`);
              handleInputDelete(row.id);
              // console.log("Failed to update. Status:", response);
              // Cập nhật giao diện hoặc thông báo thành công
            } else {
              console.error("Delete failed");

              // Xử lý lỗi nếu xoá không thành công
            }
          } catch (error) {
            console.error("Error:", error);
            // Xử lý lỗi nếu có lỗi khi gửi yêu cầu
          }
        };

        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                backgroundColor: "#FFEBCD",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              style={{
                backgroundColor: "#FF6666",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" />
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
        <DataGrid rows={account} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
