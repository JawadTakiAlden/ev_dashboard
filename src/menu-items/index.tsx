import { ReactNode } from "react";
import { MdHome, MdPeopleOutline } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";

export const adminMenuItems: MenuItemObject[] = [
  {
    title: "Dashboard",
    type: "group",
    children: [
      {
        id: "admin-home",
        path: "/admin/dashboard/home",
        title: "Home",
        type: "item",
        icon: <MdHome size={30} />,
        external: false,
      },
    ],
  },
  {
    id: "users",
    type: "group",
    title: "Users",
    children: [
      {
        id: "all-users",
        title: "All Users",
        path: "/admin/dashboard/users",
        icon: <MdPeopleOutline size={30} />,
        type: "item",
      },
    ],
  },
  {
    id: "subscription-management",
    type: "coollabse",
    title: "Subscription Management",
    children: [
      {
        id: "fitness-subscriptions",
        title: "Fitness Subscriptions",
        path: "/admin/dashboard/subscriptions/fitness",
        icon: <MdOutlinePayments size={30} />,
        type: "item",
      },
      {
        id: "food-subscriptions",
        title: "Food Subscriptions",
        path: "/admin/dashboard/subscriptions/food",
        icon: <MdOutlinePayments size={30} />,
        type: "item",
      },
      {
        id: "food-plans",
        title: "Food Plans",
        type: "coollabse",
        children: [
          {
            id: "food-plans",
            title: "All Plans",
            type: "item",
            icon: <GiMeal size={30} />,
            path: "/admin/dashboard/subscriptions/food-plans/create",
          },
          {
            id: "food-plans-create",
            title: "Create new one",
            type: "item",
            icon: <IoCreate size={30} />,
            path: "/admin/dashboard/subscriptions/food-plans/create",
          },
        ],
      },
    ],
  },
];

export interface MenuItemObject {
  id?: string;

  path?: string;

  title: string;

  type: "item" | "group" | "coollabse";

  children?: MenuItemObject[];

  icon?: ReactNode | string;

  target?: "_self" | "_blank";

  external?: boolean;
}
