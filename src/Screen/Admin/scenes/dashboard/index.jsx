import React, { useState, useEffect }  from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../../../component/Admin/data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import Header from "../../../../component/Admin/components/Header";
import LineChart from "../../../../component/Admin/components/LineChart";
import StatBox from "../../../../component/Admin/components/StatBox";
import axios from 'axios';
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [account, setAccount] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [comment, setComment] = useState([]);
  const [Cart, setCart] = useState([]);
  let numClient = 0;
  let numProducts = 0;
  let numOrder = 0;
  let numComment = 0;
    useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
    for(let i = 0; i < account.length; i++){
      if(account[i].role == 'customer'){
        numClient++;
      }
    }
    useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/ProductView-data.php')
        .then(response => setProducts(response.data))
        .catch(error => console.log(error));
    }, []);
    for(let i = 0; i < products.length; i++){
      numProducts++;
    }   
    useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Order-data.php')
        .then(response => setOrder(response.data))
        .catch(error => console.log(error));
    }, []);
    for(let i = 0; i < order.length; i++){
      numOrder++;
    }  
    useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Comment-data.php')
        .then(response => setComment(response.data))
        .catch(error => console.log(error));
    }, []);
    for(let i = 0; i < comment.length; i++){
      numComment++;
    } 
    useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Cart-data.php')
        .then(response => setCart(response.data))
        .catch(error => console.log(error));
    }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD"/>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#5941BB"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={numProducts}
            subtitle="Sản phẩm"
            icon={
              <DirectionsCarIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#5941BB"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={numOrder}
            subtitle="Giao dịch"
            icon={
              <InventoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#5941BB"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={numClient}
            subtitle="Khách Hàng"
            icon={
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#5941BB"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={numComment}
            subtitle="Bình luận"
            icon={
              <InsertCommentIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor="#5941BB"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Biểu đồ doanh thu
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                12,365,799.32$
              </Typography>
            </Box>
          </Box>
          <Box height="500px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor="#5941BB"
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Đơn đặt hàng
            </Typography>
          </Box>

          {Cart.map((transaction) => (
            <Box
              key={`${transaction.customer_id}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.car_name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.price}đ</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                 Xem chi tiết
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
