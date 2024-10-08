import React, { useState, useEffect }  from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../../../component/Admin/components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from 'axios';
const Comments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/CarShop_Project/BE/Model/commentView-data.php')
      .then(response => setComment(response.data))
      .catch(error => console.log(error));
  }, []);
  
  const handleContentChange = (row) => {
    const newData = comment.map((rowData) => {
      if (rowData.id === row.id) {
        return { ...rowData, content: '**Sensitive Comment Content**' }; // Thay đổi giá trị content thành 'abc'
      }
      return rowData;
    });
    setComment(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "car_name",
      headerName: "Car Name",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1, 
    },
    {
      field: "date_time",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      flex: 2,
    },
    {
      field: "rate",
      headerName: "Rate",
      flex: 0.6,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        // const handleUpdate = () => {
        //   // Xử lý logic khi nhấn nút "Update"
        //   console.log("Update row with ID:", row.id);
        //   // Thêm logic cập nhật dữ liệu vào database tại đây
        // };
        const handleUpdate = async () => {
          try {
            console.log(row.password);
            const response = await fetch(
              "http://localhost/CarShop_Project/BE/Model/Update_Comment_Content.php",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  comment_id: row.id,
                  content: "**Sensitive Comment Content**"
                }), // Gửi ID cần cập nhật
              }
            );

            if (response.ok) {
              console.log(`Updated row with ID: ${row.id}`);
              handleContentChange(row);
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
              Hide Content
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Bình luận - Đánh giá"
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
          rows={comment}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Comments;
