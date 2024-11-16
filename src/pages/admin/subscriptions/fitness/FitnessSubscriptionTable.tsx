import React from "react";
import Table from "../../../../components/Table";
import {
  subscriptions,
  subscriptionsColumns,
} from "../../../../tables-def/subscription";

const FitnessSubscriptionTable = () => {
  return (
    <Table
      enableColumnFilters
      data={subscriptions}
      columns={subscriptionsColumns}
    />
  );
};

export default FitnessSubscriptionTable;
