import { Box } from "@mui/material";
import React, { lazy } from "react";
import FoodSubscriptionTable from "./FoodSubscriptionTable";
import { gridSpacing } from "../../../../config";
import MainCard from "../../../../components/MainCard";
import SectionTitle from "../../../../components/SectionTitle";
import Grid from "@mui/material/Grid2";
import Loadable from "../../../../components/Loadable";
import JustInViewRender from "../../../../components/JustInViewRender";
import { useGetActiveMealsSubscriptionStats } from "../../../../api/subscriptions";
import { useGetRenwalFoodStats } from "../../../../api/admin/stats";

const RenewalAndCancelationBarChartAnalysis = Loadable(
  lazy(() => import("../components/RenewalAndCancelationBarChartAnalysis"))
);
const RenewalAndCancelationLineChartAnalysis = Loadable(
  lazy(() => import("../components/RenewalAndCancelationLineChartAnalysis"))
);

const FoodSubscriptions = () => {
  const mealSubscription = useGetActiveMealsSubscriptionStats();
  const mealRenwalSubscription = useGetRenwalFoodStats();

  const xaxis = mealSubscription?.data?.data?.xaxis || [];
  const data = mealSubscription?.data?.data?.subscription_data || [];
  let FinalData = data.map((num: number, i: number) => ({
    y: num,
    x: xaxis[i],
  }));
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
          <JustInViewRender>
            <MainCard>
              <SectionTitle sx={{ color: "text.primary" }}>
                Food Subscriptions analysis
              </SectionTitle>
              <RenewalAndCancelationBarChartAnalysis renewalData={FinalData} />
            </MainCard>
          </JustInViewRender>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <JustInViewRender>
            <MainCard>
              <SectionTitle sx={{ color: "text.primary" }}>
                Food Subscriptions Renewal
              </SectionTitle>
              <RenewalAndCancelationLineChartAnalysis
                categories={mealRenwalSubscription?.data?.data?.xaxis || []}
                isLoading={mealRenwalSubscription.isLoading}
                renewalData={
                  mealRenwalSubscription?.data?.data?.renewal_data || []
                }
              />
            </MainCard>
          </JustInViewRender>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodSubscriptions;
