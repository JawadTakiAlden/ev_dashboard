import React from "react";
import { RouterProvider } from "react-router";
import { appRouter } from "../router";

const AppRouterProvider = () => {
  return <RouterProvider router={appRouter()} />;
};

export default AppRouterProvider;
