import React from "react";
import { RouterProvider } from "react-router";
import { AppRouter } from "../router";

const AppRouterProvider = () => {
  return <RouterProvider router={AppRouter} />;
};

export default AppRouterProvider;
