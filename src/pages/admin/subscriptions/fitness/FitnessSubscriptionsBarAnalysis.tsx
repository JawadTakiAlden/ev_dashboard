import React from "react";
import RenewalAndCancelationBarChartAnalysis from "../components/RenewalAndCancelationBarChartAnalysis";
import { useGetRenwalStats } from "../../../../api/admin/stats";
import LoadingDataError from "../../../../components/LoadingDataError";
import { Typography } from "@mui/material";

const FitnessSubscriptionsBarAnalysis = () => {
  const fitnessStats = useGetRenwalStats();
  if (fitnessStats.isError) {
    return <LoadingDataError refetch={fitnessStats.refetch} />;
  }
  if (fitnessStats.isLoading) {
    return <Typography>Loading ...</Typography>;
  }
  const xaxis = fitnessStats?.data?.data?.xaxis;
  const data = fitnessStats?.data?.data?.renewal_data;

  let FinalData = data.map((num: number, i: number) => ({
    y: num,
    x: xaxis[i],
  }));

  return <RenewalAndCancelationBarChartAnalysis renewalData={FinalData} />;
};

export default FitnessSubscriptionsBarAnalysis;
