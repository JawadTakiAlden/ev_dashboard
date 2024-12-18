import React from "react";
import { gridSpacing } from "../../../config";
import Grid from "@mui/material/Grid2";
import StatisticCard from "../../../components/StatisticCard";
const Home = () => {
  return (
    <Grid container direction={"column"} spacing={gridSpacing}>
      {/* First Row */}
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatisticCard
            count="120,350,600"
            isLoss={false}
            percentage={20}
            title="Total users number"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatisticCard
            count="120,350,600"
            isLoss={false}
            percentage={20}
            title="Total users number"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatisticCard
            count="120,350,600"
            isLoss={false}
            percentage={20}
            title="Total Food subsercption"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatisticCard
            count="120,350,600"
            isLoss
            percentage={20}
            title="Total users number"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
