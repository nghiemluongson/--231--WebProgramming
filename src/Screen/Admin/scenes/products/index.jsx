import React, { useState, useEffect }  from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "./../../../../component/Admin/data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockClockIcon from '@mui/icons-material/LockClock';
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../../component/Admin/components/Header";
import axios from 'axios';
const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/CarShop_Project/BE/Model/ProductView-data.php')
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleInputChange = (e, id, field) => {
    console.log(e.target.value);
    const newData = product.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: e.target.value };
      }
      return row;
    });
    setProduct(newData);
  };
// ====================Image====================


const [editImgUrl, setEditImgUrl] = useState(null);

const handleImageClick = (row) => {
  setEditImgUrl(row.img);
};

const handleImageUrlChange = (e, row) => {
  handleInputChange(e, row.id, 'img');
};

const handleBlurImage = () => {
  setEditImgUrl(null);
};

const handleKeyPress = (e, row) => {
  if (e.key === 'Enter') {
    setEditImgUrl(null);
    // Perform any further actions if needed
  }
};

// ====================Image====================
    
  const handleInputDelete = (id) => {
    // Tạo một bản sao mới của dữ liệu tài khoản (product) và loại bỏ phần tử có id trùng khớp
    const updatedData = product.filter((row) => row.id !== id);
  
    // Cập nhật state với dữ liệu mới sau khi xóa
    setProduct(updatedData);
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
    { field: "id", 
    headerName: "Car ID", 
    flex: 1, 
    },
    {
      field: "name",
      headerName: "Name",
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
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.price}
            onChange={(e) => handleInputChange(e, row.id, "price")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.quantity}
            onChange={(e) => handleInputChange(e, row.id, "quantity")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.brand}
            onChange={(e) => handleInputChange(e, row.id, "brand")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: 'img',
      headerName: 'Image',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {editImgUrl ? (
              <input
                type="text"
                value={row.img}
                onChange={(e) => handleImageUrlChange(e, row)}
                onBlur={handleBlurImage}
                onKeyDown={(e) => handleKeyPress(e, row)}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
            ) : (
              <img
                src={row.img}
                alt="Product"
                style={{
                  width: '80px',
                  height: '50px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(row)}
              />
            )}
          </div>
        );
      },
    },
    {
      field: "acceleration",
      headerName: "Acceleration",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.acceleration}
            onChange={(e) => handleInputChange(e, row.id, "acceleration")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "max_speed",
      headerName: "Max Speed",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.max_speed}
            onChange={(e) => handleInputChange(e, row.id, "max_speed")}
            style={inputStyle}
          />
        );
      },
    },
    // Thêm các trường còn lại tương tự như trên
    {
      field: "wattage",
      headerName: "Wattage",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.wattage}
            onChange={(e) => handleInputChange(e, row.id, "wattage")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "torque",
      headerName: "Torque",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.torque}
            onChange={(e) => handleInputChange(e, row.id, "torque")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "fuel_consumption",
      headerName: "Fuel Consumption",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.fuel_consumption}
            onChange={(e) => handleInputChange(e, row.id, "fuel_consumption")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "emissions_co2",
      headerName: "Emissions CO2",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <input
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={row.emissions_co2}
            onChange={(e) => handleInputChange(e, row.id, "emissions_co2")}
            style={inputStyle}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      renderCell: ({ row }) => {
        const handleUpdate = async () => {
          try {
            console.log(row.password);
            const response = await fetch(
              "http://localhost/CarShop_Project/BE/Controller/index.php/account/update",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  car_id: row.id,
                  price: row.price,
                  quantity: row.quantity,
                  name: row.name,
                  brand: row.brand,
                  img: row.img,
                  acceleration: row.acceleration,
                  max_speed: row.max_speed,
                  wattage: row.wattage,
                  torque: row.torque,
                  fuel_consumption: row.fuel_consumption,
                  emissions_co2: row.emissions_co2,
                }), // Gửi thông tin cần cập nhật
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
              "http://localhost/CarShop_Project/BE/Controller/index.php/account/delete",
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
      <Header title="Sản Phẩm"/>
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
        <DataGrid rows={product} columns={columns} />
      </Box>
    </Box>
  );
};

export default Product;
