import { RouteObject } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Home from "../pages/admin/dashboard/Home";
import AllUsers from "../pages/admin/users";
import UserProfile from "../pages/profile";
import FitnessSubscriptions from "../pages/admin/subscriptions/fitness";
import FoodSubscriptions from "../pages/admin/subscriptions/food";

export const adminRoutes: RouteObject = {
  path: "",
  element: <RootLayout />,
  children: [
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "users",

              children: [
                {
                  path: "",
                  element: <AllUsers />,
                },
                {
                  path: ":id",
                  element: <UserProfile />,
                },
              ],
            },
            {
              path: "subscriptions",
              children: [
                {
                  path: "fitness",
                  element: <FitnessSubscriptions />,
                },
                {
                  path: "food",
                  element: <FoodSubscriptions />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
