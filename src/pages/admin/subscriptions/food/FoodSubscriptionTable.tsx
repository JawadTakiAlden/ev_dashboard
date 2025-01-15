import { useGetMealSubscription } from "../../../../api/subscriptions";
import Table from "../../../../components/Table";
import { mealSubscriptionColumns } from "../../../../tables-def/meal-subscriptions";

const FoodSubscriptionTable = () => {
  const mealSubscription = useGetMealSubscription();
  return (
    <Table
      columns={mealSubscriptionColumns}
      data={mealSubscription?.data?.data || []}
      state={{
        isLoading: mealSubscription.isLoading,
      }}
    />
  );
};

export default FoodSubscriptionTable;
