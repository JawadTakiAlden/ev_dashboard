import Table from "../../../../components/Table";
import mealSubscriptions, {
  mealSubscriptionColumns,
} from "../../../../tables-def/meal-subscriptions";

const FoodSubscriptionTable = () => {
  return <Table columns={mealSubscriptionColumns} data={mealSubscriptions} />;
};

export default FoodSubscriptionTable;
