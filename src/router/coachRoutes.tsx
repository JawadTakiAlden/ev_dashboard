import { RouteObject } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import CoachLayout from "../layouts/CoachLayout/CoachLayout";
import Home from "../pages/coach/dashboard/Home";
import WorkoutRequests from "../pages/coach/WorkoutRequests/WorkoutRequests";
import UserProfile from "../pages/profile";
import CreateWorkout from "../pages/Workout/createWorkout/createWorkout";
import MainWorkoutDetail from "../pages/Workout/wokroutDetail";
import GroupWorkoutManagement from "../pages/groupWorkoutManagem/GroupWorkoutManagement";

export const coachRoutes: RouteObject = {
  path: "",
  element: <RootLayout />,
  children: [
    {
      path: "coach",
      element: <CoachLayout />,
      children: [
        {
          path: "dashboard",
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "workoutRequests",
              element: <WorkoutRequests />,
            },
            {
              path: "users",
              children: [
                {
                  path: ":userId",
                  element: <UserProfile />,
                },
              ],
            },
            {
              path: "workout",
              children: [
                {
                  path: "create",
                  element: <CreateWorkout />,
                },
                {
                  path: ":workoutID",
                  element: <MainWorkoutDetail withAction={false} />,
                },
              ],
            },
            {
              path: "group-workout",
              element: <GroupWorkoutManagement />,
            },
          ],
        },
      ],
    },
  ],
};
