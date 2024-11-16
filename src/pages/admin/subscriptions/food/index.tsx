import { Box } from "@mui/material";
import React from "react";
import FoodSubscriptionTable from "./FoodSubscriptionTable";
import { gridSpacing } from "../../../../config";
import MainCard from "../../../../components/MainCard";
import SectionTitle from "../../../../components/SectionTitle";
import Grid from "@mui/material/Grid2";
import RenewalAndCancelationBarChartAnalysis from "../components/RenewalAndCancelationBarChartAnalysis";
import RenewalAndCancelationLineChartAnalysis from "../components/RenewalAndCancelationLineChartAnalysis";

const FoodSubscriptions = () => {
  return (
    <Box>
      <FoodSubscriptionTable />
      <Grid
        alignItems={"stretch"}
        sx={{ mt: 2 }}
        container
        spacing={gridSpacing}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <MainCard>
            <SectionTitle sx={{ color: "text.primary" }}>
              Food Subscriptions analysis
            </SectionTitle>
            <RenewalAndCancelationBarChartAnalysis
              renewalData={[
                { x: "2010", y: Math.floor(Math.random() * 100) },
                { x: "2012", y: Math.floor(Math.random() * 100) },
                { x: "2013", y: Math.floor(Math.random() * 100) },
                { x: "2014", y: Math.floor(Math.random() * 100) },
                { x: "2015", y: Math.floor(Math.random() * 100) },
                { x: "2016", y: Math.floor(Math.random() * 100) },
                { x: "2017", y: Math.floor(Math.random() * 100) },
                { x: "2018", y: Math.floor(Math.random() * 100) },
              ]}
              cacelationData={[
                { x: "2010", y: Math.floor(Math.random() * 100) },
                { x: "2011", y: Math.floor(Math.random() * 100) },
                { x: "2012", y: Math.floor(Math.random() * 100) },
                { x: "2013", y: Math.floor(Math.random() * 100) },
                { x: "2014", y: Math.floor(Math.random() * 100) },
                { x: "2015", y: Math.floor(Math.random() * 100) },
                { x: "2016", y: Math.floor(Math.random() * 100) },
                { x: "2016", y: Math.floor(Math.random() * 100) },
              ]}
            />
          </MainCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <MainCard>
            <SectionTitle sx={{ color: "text.primary" }}>
              Food Subscriptions analysis
            </SectionTitle>
            <RenewalAndCancelationLineChartAnalysis
              categories={[
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
              ]}
              renewalData={Array.from({ length: 12 }, () =>
                Math.floor(Math.random() * 100)
              )}
              cacelationData={Array.from({ length: 12 }, () =>
                Math.floor(Math.random() * 100)
              )}
            />
          </MainCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodSubscriptions;
