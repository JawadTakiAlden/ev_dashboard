import { RouteObject } from "react-router";
import KitchenLayout from "../layouts/KitchenLayout.tsx/KitchenLayout";
import RootLayout from "../layouts/RootLayout/RootLayout";
import MealOrders from "../pages/mealOrders/MealOrders";
import Meals from "../pages/meals";
import MealDetail from "../pages/meals/MealDetail/mealDetail";
import MealTypes from "../pages/MealTypes";
import MealOrderDetail from "../pages/mealOrders/detail/MealOrderDetail";
import OrderOfDay from "../pages/mealOrders/order-of-day/OrderOfDay";

const kitchenRoutes: RouteObject = {
  path: "",
  element: <RootLayout />,
  children: [
    {
      path: "kitchen_staff",
      element: <KitchenLayout />,
      children: [
        {
          path: "dashboard",
          children: [
            {
              path: "orders",
              children: [
                {
                  path: "",
                  element: <MealOrders />,
                },
                {
                  path: ":orderId",
                  element: <MealOrderDetail />,
                },
                {
                  path: "orderOf",
                  children: [
                    {
                      path: ":day",
                      element: <OrderOfDay />,
                    },
                  ],
                },
              ],
            },

            {
              path: "meals",
              children: [
                {
                  path: "",
                  element: <Meals />,
                },
                {
                  path: ":mealId",
                  element: <MealDetail />,
                },
              ],
            },
            {
              path: "meal-types",
              children: [
                {
                  path: "",
                  element: <MealTypes />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default kitchenRoutes;
