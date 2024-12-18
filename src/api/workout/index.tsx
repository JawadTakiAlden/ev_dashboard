import { useQuery } from "@tanstack/react-query";
import { request } from "../baseRequest";

export const useGetWorkout = () => {
  const getWorkouts = () => {
    return request({
      url: "/",
    });
  };

  const query = useQuery({
    queryKey: ["get-workouts"],
    queryFn: getWorkouts,
  });

  return query;
};
