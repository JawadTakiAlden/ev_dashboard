import React from "react";
import RenewalAndCancelationBarChartAnalysis from "../components/RenewalAndCancelationBarChartAnalysis";

const FitnessSubscriptionsBarAnalysis = () => {
  return (
    <RenewalAndCancelationBarChartAnalysis
      renewalData={[
        {
          x: "2011",
          y: 12,
        },
        {
          x: "2012",
          y: 15,
        },
        {
          x: "2014",
          y: 22,
        },
        {
          x: "2018",
          y: 75,
        },
      ]}
      cacelationData={[
        {
          x: "2011",
          y: 12,
        },
        {
          x: "2012",
          y: 15,
        },
        {
          x: "2014",
          y: 22,
        },
        {
          x: "2018",
          y: 75,
        },
      ]}
    />
  );
};

export default FitnessSubscriptionsBarAnalysis;
