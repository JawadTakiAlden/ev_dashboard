import React, { lazy } from "react";
import Screen from "../../../components/Screen";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import StatisticCard from "../../../components/StatisticCard";
import Loadable from "../../../components/Loadable";
import { useGetStats } from "../../../api/admin/stats";
import Notification from "../notification/notification";

const SigninStatstics = Loadable(lazy(() => import("./SigninStatstics")));

const Home = () => {
  const stats = useGetStats();

  return (
    <Screen title="Admin Panel - Home">
      <Grid container direction={"column"} spacing={gridSpacing}>
        {/* First Row */}
        <Grid container>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <StatisticCard
              count={`${stats?.data?.data?.metrics?.activeFitnessSubscriptions}`}
              isLoss={false}
              percentage={20}
              loading={stats.isLoading}
              title="Active Fitness Subscriptions"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <StatisticCard
              count={`${stats?.data?.data?.metrics?.activeMealSubscriptions}`}
              isLoss={false}
              percentage={20}
              loading={stats.isLoading}
              title="Active Meal Subscriptions"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <StatisticCard
              count={`${stats?.data?.data?.metrics?.newSignupsCount}`}
              isLoss={false}
              percentage={20}
              loading={stats.isLoading}
              title="New Sign-Ups"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <StatisticCard
              count={`${stats?.data?.data?.metrics?.workoutCompletionRate}`}
              isLoss
              percentage={20}
              loading={stats.isLoading}
              title="Workout Completion Rate"
            />
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container>
          <Grid size={{ xs: 12, sm: 7, md: 8 }}>
            <SigninStatstics />
          </Grid>
          <Grid size={{ xs: 12, sm: 5, md: 4 }}>
            <Notification />
          </Grid>
        </Grid>
      </Grid>
    </Screen>
  );
};

export default Home;
