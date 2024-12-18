import { RouteObject } from "react-router";
import KitchenLayout from "../layouts/KitchenLayout.tsx/KitchenLayout";
import RootLayout from "../layouts/RootLayout/RootLayout";
import MealOrders from "../pages/mealOrders/MealOrders";
import Meals from "../pages/meals";

const kitchenRoutes: RouteObject = {
  path: "",
  element: <RootLayout />,
  children: [
    {
      path: "kitchen",
      element: <KitchenLayout />,
      children: [
        {
          path: "dashboard",
          children: [
            {
              path: "orders",
              element: <MealOrders />,
            },
            {
              path: "create-meal",
              element: <Meals />,
            },
          ],
        },
      ],
    },
  ],
};

export default kitchenRoutes;
