import { ReactNode } from "react";
import {
  MdGroupWork,
  MdHome,
  MdPeopleOutline,
  MdRequestPage,
} from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiHotMeal } from "react-icons/gi";
import { IoCalendarNumberOutline, IoCreateOutline } from "react-icons/io5";
import { CgExtensionAdd } from "react-icons/cg";
import { PiFlagBannerFold } from "react-icons/pi";
import { CiChat2 } from "react-icons/ci";
import { FaFirstOrder } from "react-icons/fa";
import { FcPrivacy } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FcRules } from "react-icons/fc";

import { FcSportsMode } from "react-icons/fc";

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
        id: "packages",
        title: "Packages",
        type: "item",
        path: "/admin/dashboard/packages",
        icon: <MdOutlinePayments size={30} />,
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
        title: "Meal Types",
        type: "item",
        icon: <CgExtensionAdd size={30} />,
        path: "/admin/dashboard/meal-types",
      },
      {
        id: "all-meal-ingredients",
        title: "Meal Ingrediant",
        type: "item",
        icon: <CgExtensionAdd size={30} />,
        path: "/admin/dashboard/meal-ingredients",
      },
      {
        id: "all-delvery-times",
        title: "Delivery Times",
        type: "item",
        icon: <RiCalendarScheduleFill size={30} />,
        path: "/admin/dashboard/delivery-times",
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
    id: "chat",
    title: "Chat",
    type: "item",
    path: "/chat",
    icon: <CiChat2 size={30} />,
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
          // {
          //   id: "all-workout",
          //   title: "All",
          //   type: "item",
          //   path: "/admin/dashboard/workout",
          //   icon: <CgGym size={30} />,
          // },
          {
            id: "create-workout",
            title: "Create workout",
            type: "item",
            path: "/admin/dashboard/workout/group-workout",
            icon: <CgGym size={30} />,
          },
        ],
      },
    ],
  },
  {
    id: "banner",
    title: "Banner",
    type: "group",
    children: [
      {
        id: "all-banners",
        title: "Banners",
        type: "item",
        icon: <PiFlagBannerFold size={30} />,
        path: "/admin/dashboard/banners",
      },
    ],
  },

  // {
  //   id: "survey-questions",
  //   title: "Manage Survey Question",
  //   type: "group",
  //   children: [
  //     {
  //       id: "survey-questions-page",
  //       title: "Survey Question",
  //       type: "item",
  //       icon: <FaQuestionCircle size={30} />,
  //       path: "/dashboard/surveyQuestions",
  //     },
  //     {
  //       id: "surveys",
  //       title: "Surveys",
  //       type: "coollabse",
  //       children: [
  //         {
  //           id: "all-surveys",
  //           title: "All",
  //           type: "item",
  //           path: "/dashboard/surveys",
  //           icon: <FcSurvey size={30} />,
  //         },
  //         {
  //           id: "create-excercise",
  //           title: "Create survey",
  //           type: "item",
  //           path: "/dashboard/surveys/create",
  //           icon: <FcSurvey size={30} />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Public",
    type: "group",
    children: [
      {
        id: "privacy-ploicy",
        path: "/admin/dashboard/privacy",
        title: "Privacy Policy",
        type: "item",
        icon: <FcPrivacy size={30} />,
        external: false,
      },
      {
        id: "terms",
        path: "/admin/dashboard/terms-and-conditions",
        title: "Terms & Condtions",
        type: "item",
        icon: <FcRules size={30} />,
        external: false,
      },
      {
        id: "faq",
        path: "/admin/dashboard/faqs",
        title: "FAQ",
        type: "item",
        icon: <FcFaq size={30} />,
        external: false,
      },

      {
        id: "sport",
        path: "/admin/dashboard/sports",
        title: "Sports",
        type: "item",
        icon: <FcSportsMode size={30} />,

        external: false,
      },
    ],
  },
];

export const coacheMenuItems: MenuItemObject[] = [
  {
    title: "Dashboard",
    type: "group",
    children: [
      {
        id: "coach-home",
        path: "/coach/dashboard/home",
        title: "Home",
        type: "item",
        icon: <MdHome size={30} />,
        external: false,
      },
    ],
  },
  {
    id: "users-requests",
    title: "User Requests",
    type: "group",
    children: [
      {
        id: "all-workout-requests",
        title: "Workout Requests",
        type: "item",
        path: "/coach/dashboard/workoutRequests",
        icon: <MdRequestPage size={30} />,
      },
    ],
  },
  {
    id: "group-workout",
    title: "Group Workout",
    type: "item",
    path: "/coach/dashboard/group-workout",
    icon: <MdGroupWork size={30} />,
  },
  {
    id: "chat",
    title: "Chat",
    type: "item",
    path: "/chat",
    icon: <CiChat2 size={30} />,
  },
];

export const kitchenItems: MenuItemObject[] = [
  {
    title: "Dashboard",
    type: "group",
    children: [
      {
        id: "kitchen-order",
        path: "/kitchen_staff/dashboard/orders",
        title: "Orders",
        type: "item",
        icon: <FaFirstOrder size={30} />,
        external: false,
      },
      {
        id: "create-meal",
        path: "/kitchen_staff/dashboard/meals",
        title: "Create Meal",
        type: "item",
        icon: <IoCreateOutline size={30} />,
        external: false,
      },
      {
        id: "all-meal-types",
        title: "Types & Ingrediant",
        type: "item",
        icon: <CgExtensionAdd size={30} />,
        path: "/kitchen_staff/dashboard/meal-types",
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
