import { RouteObject } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Home from "../pages/admin/dashboard/Home";
import AllUsers from "../pages/admin/users";
import UserProfile from "../pages/profile";
import FitnessSubscriptions from "../pages/admin/subscriptions/fitness";
import FoodSubscriptions from "../pages/admin/subscriptions/food";
import Workout from "../pages/Workout";
import CreateWorkout from "../pages/Workout/createWorkout/createWorkout";
import Exercise from "../pages/Exercise";
import CreateExcercise from "../pages/Exercise/createExcercise/createExcercise";
import ExcerciseDetail from "../pages/Exercise/exerciseDetail/excerciseDetail";
import MainWorkoutDetail from "../pages/Workout/wokroutDetail";
import SurveyQuestions from "../pages/surveyQuestions";
import Surveys from "../pages/Survey";
import SurveyDetail from "../pages/Survey/surveyDetail/surveyDetail";
import CreateSurvey from "../pages/Survey/createSurvey/createSurvey";
import UpdateSurvey from "../pages/Survey/updateSurvey/updateSurvey";
import Meals from "../pages/meals";
import MealDetail from "../pages/meals/MealDetail/mealDetail";
import MealPlans from "../pages/MealPlans";
import MealTypes from "../pages/MealTypes";
import CreateMealPlan from "../pages/MealPlans/createMealPlan/createMealPlan";
import MealPlanDetail from "../pages/MealPlans/mealPlanDetail";
import WeekManagement from "../pages/weekManagement/weekManagement";
import Banners from "../pages/banner";
import Packages from "../pages/packages";
import PackageDetail from "../pages/packages/PackageDetail";

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
            {
              path: "workout",
              children: [
                {
                  path: "",
                  element: <Workout />,
                },
                {
                  path: "create",
                  element: <CreateWorkout />,
                },
                {
                  path: ":workoutID",
                  element: <MainWorkoutDetail />,
                },
              ],
            },
            {
              path: "exercises",
              children: [
                {
                  path: "",
                  element: <Exercise />,
                },
                {
                  path: "create",
                  element: <CreateExcercise />,
                },
                {
                  path: ":exerciseID",
                  element: <ExcerciseDetail />,
                },
              ],
            },
            {
              path: "surveys",
              children: [
                {
                  path: "",
                  element: <Surveys />,
                },
                {
                  path: "create",
                  element: <CreateSurvey />,
                },
                {
                  path: ":surveyID",
                  children: [
                    {
                      path: "",
                      element: <SurveyDetail />,
                    },
                    {
                      path: "update",
                      element: <UpdateSurvey />,
                    },
                  ],
                },
              ],
            },
            {
              path: "surveyQuestions",
              children: [
                {
                  path: "",
                  element: <SurveyQuestions />,
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
              path: "meal-plans",
              children: [
                {
                  path: "",
                  element: <MealPlans />,
                },
                {
                  path: "create-meal-plan",
                  element: <CreateMealPlan />,
                },
                {
                  path: ":mealPlanId",
                  element: <MealPlanDetail />,
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
            {
              path: "weekManagement",
              element: <WeekManagement />,
            },
            {
              path: "banners",
              element: <Banners />,
            },
            {
              path: "packages",
              children: [
                {
                  path: "",
                  element: <Packages />,
                },
                {
                  path: ":packageId",
                  element: <PackageDetail />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
