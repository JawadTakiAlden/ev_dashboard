import React from "react";
import LineChart from "../../../../components/charts/LineChart";
import { RenewalAndCancelationAnalysisProps } from "./RenewalAndCancelationBarChartAnalysis";
import { useTheme } from "@mui/material";

const RenewalAndCancelationLineChartAnalysis = ({
  renewalData,
  cacelationData,
  categories,
}: RenewalAndCancelationAnalysisProps) => {
  const theme = useTheme();
  return (
    <LineChart
      series={[
        {
          name: "renewal",
          data: renewalData,
        },
        {
          name: "cancelation",
          data: cacelationData,
        },
      ]}
      options={{
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.3,
            opacityTo: 0.8,
          },
        },
        legend: {
          labels: {
            colors: [theme.palette.text.primary, theme.palette.text.primary],
          },
          markers: {
            fillColors: [
              theme.palette.secondary.dark,
              theme.palette.primary.main,
            ],
          },
        },

        colors: [theme.palette.secondary.dark, theme.palette.primary.main],
        tooltip: {
          theme: theme.palette.mode,
        },
        grid: {
          borderColor: theme.palette.divider,
        },
        yaxis: {
          labels: {
            style: {
              colors: [theme.palette.text.primary],
            },
          },
        },
        xaxis: {
          categories: categories,
          labels: {
            style: {
              colors: Array(categories?.length).fill(
                theme.palette.text.primary
              ),
            },
          },
        },
      }}
    />
  );
};

export default RenewalAndCancelationLineChartAnalysis;
