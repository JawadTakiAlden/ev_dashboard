import React, { lazy } from "react";
import Screen from "../../../components/Screen";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import StatisticCard from "../../../components/StatisticCard";
import Loadable from "../../../components/Loadable";

const SigninStatstics = Loadable(lazy(() => import("./SigninStatstics")));

const Home = () => {
  return (
    <Screen title="Admin Panel - Home">
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

        {/* Second Row */}
        <Grid container>
          <Grid size={{ xs: 12, sm: 7, md: 8 }}>
            <SigninStatstics />
          </Grid>
          <Grid size={{ xs: 12, sm: 5, md: 4 }}>
            another chart in dashboard
          </Grid>
        </Grid>
      </Grid>
    </Screen>
  );
};

export default Home;
