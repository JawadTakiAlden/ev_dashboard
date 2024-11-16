import { RouteObject } from "react-router";
import MinimalLayout from "../layouts/MinimalLayout/MinimalLayout";
import Login from "../pages/authentication/Login/Login";
import RootLayout from "../layouts/RootLayout/RootLayout";

export const authRoutes: RouteObject = {
  path: "",
  element: <RootLayout />,
  children: [
    {
      path: "auth",
      element: <MinimalLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ],
};
