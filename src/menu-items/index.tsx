import { ReactNode } from "react";
import { MdHome, MdPeopleOutline } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FcSurvey } from "react-icons/fc";
import { GiHotMeal } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { CgExtensionAdd } from "react-icons/cg";

import { FaQuestionCircle } from "react-icons/fa";

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
    id: "survey-questions",
    title: "Finance management",
    type: "group",
    children: [
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
        ],
      },
    ],
  },

  {
    id: "meals",
    title: "Meals Managment",
    type: "group",
    children: [
      {
        id: "all-meals",
        title: "Meals",
        type: "item",
        path: "/admin/dashboard/meals",
        icon: <GiHotMeal size={30} />,
      },
      {
        id: "all-meal-plans",
        title: "Meal Plans",
        type: "item",
        icon: <GiMeal size={30} />,
        path: "/admin/dashboard/meal-plans",
      },
      {
        id: "all-meal-types",
        title: "Types & Ingrediant",
        type: "item",
        icon: <CgExtensionAdd size={30} />,
        path: "/admin/dashboard/meal-types",
      },
      {
        id: "week-management",
        title: "Week Management",
        type: "item",
        icon: <IoCalendarNumberOutline size={30} />,
        path: "/admin/dashboard/weekManagement",
      },
    ],
  },
  {
    id: "workout-management",
    type: "group",
    title: "Workouts Managemnt",
    children: [
      {
        id: "exercises",
        title: "Exercises",
        type: "coollabse",
        children: [
          {
            id: "all-exercise",
            title: "All",
            type: "item",
            path: "/admin/dashboard/exercises",
            icon: <CgGym size={30} />,
          },
          {
            id: "create-excercise",
            title: "Create exercise",
            type: "item",
            path: "/admin/dashboard/exercises/create",
            icon: <CgGym size={30} />,
          },
        ],
      },
      {
        id: "workout",
        title: "Workouts",
        type: "coollabse",
        children: [
          {
            id: "all-workout",
            title: "All",
            type: "item",
            path: "/admin/dashboard/workout",
            icon: <CgGym size={30} />,
          },
          {
            id: "create-workout",
            title: "Create workout",
            type: "item",
            path: "/admin/dashboard/workout/create",
            icon: <CgGym size={30} />,
          },
        ],
      },
    ],
  },

  {
    id: "survey-questions",
    title: "Manage Survey Question",
    type: "group",
    children: [
      {
        id: "survey-questions-page",
        title: "Survey Question",
        type: "item",
        icon: <FaQuestionCircle size={30} />,
        path: "/admin/dashboard/surveyQuestions",
      },
      {
        id: "surveys",
        title: "Surveys",
        type: "coollabse",
        children: [
          {
            id: "all-surveys",
            title: "All",
            type: "item",
            path: "/admin/dashboard/surveys",
            icon: <FcSurvey size={30} />,
          },
          {
            id: "create-excercise",
            title: "Create survey",
            type: "item",
            path: "/admin/dashboard/surveys/create",
            icon: <FcSurvey size={30} />,
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
