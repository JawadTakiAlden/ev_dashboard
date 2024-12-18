import React from "react";
import Table from "../../../../components/Table";
import { subscriptionsColumns } from "../../../../tables-def/subscription";
import { useGetFitnessSubscription } from "../../../../api/subscriptions";

const FitnessSubscriptionTable = () => {
  const subscriptions = useGetFitnessSubscription();
  return (
    <Table
      enableColumnFilters
      data={subscriptions?.data?.data || []}
      state={{
        isLoading: subscriptions.isLoading,
      }}
      columns={subscriptionsColumns}
    />
  );
};

export default FitnessSubscriptionTable;
