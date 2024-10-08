import { Box } from "@mui/material";
import Header from "../../../../component/Admin/components/Header";
import LineChart from "../../../../component/Admin/components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
