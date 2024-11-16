import RenewalAndCancelationLineChartAnalysis from "../components/RenewalAndCancelationLineChartAnalysis";

const FitnessSubscriptionsLineAnalysis = () => {
  return (
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
      renewalData={[20, 20, 30, 50, 90]}
      cacelationData={[25, 15, 11, 90, 85]}
    />
  );
};

export default FitnessSubscriptionsLineAnalysis;
