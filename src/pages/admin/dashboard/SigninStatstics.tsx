import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import MainCard from "../../../components/MainCard";
import AreaChart from "../../../components/charts/AreaChart";

export type DateFilterOptions = "day" | "month" | "year" | "week";

const SigninStatstics = () => {
  const [slot, setSlot] = useState<DateFilterOptions>("month");
  const theme = useTheme();

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid size={8}>
          <Typography variant="h5">New Sign up</Typography>
        </Grid>
        <Grid size={4}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"flex-end"}
            columnGap={1}
          >
            <Button
              size="small"
              onClick={() => setSlot("month")}
              color={slot === "month" ? "primary" : "secondary"}
              variant={slot === "month" ? "outlined" : "text"}
            >
              Month
            </Button>
            <Button
              size="small"
              onClick={() => setSlot("week")}
              color={slot === "week" ? "primary" : "secondary"}
              variant={slot === "week" ? "outlined" : "text"}
            >
              Week
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <MainCard cardContent={false} sx={{ mt: 1.5 }}>
        <Box sx={{ pt: 1, pr: 2 }}>
          <AreaChart
            series={[
              {
                name: "Page Views",
                data:
                  slot === "month"
                    ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
                    : [31, 40, 28, 51, 42, 109, 100],
              },
              {
                name: "Sessions",
                data:
                  slot === "month"
                    ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
                    : [11, 32, 45, 32, 34, 52, 41],
              },
            ]}
            options={{
              tooltip: {
                theme: theme.palette.mode,
              },
              colors:
                theme.palette.mode === "dark"
                  ? [theme.palette.grey[700]]
                  : [theme.palette.primary.main, theme.palette.secondary.main],
              xaxis: {
                categories:
                  slot === "month"
                    ? [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ]
                    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                labels: {
                  style: {
                    colors: [
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                      theme.palette.text.primary,
                    ],
                  },
                },

                axisBorder: {
                  show: true,
                  color: theme.palette.divider,
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: [theme.palette.text.primary],
                  },
                },
              },
              grid: {
                borderColor: theme.palette.divider,
              },
            }}
          />
        </Box>
      </MainCard>
    </>
  );
};

export default SigninStatstics;
