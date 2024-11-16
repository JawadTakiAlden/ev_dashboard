import { RouteObject } from "react-router";
import NotFound404 from "../pages/errors/_404";

export const NotFound: RouteObject = {
  path: "*",
  element: <NotFound404 />,
};

const errors = [NotFound];

export default errors;
