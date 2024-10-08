import { Box } from "@mui/material";
import Header from "./../../../../component/Admin/components/Header";
import PieChart from "./../../../../component/Admin/components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
