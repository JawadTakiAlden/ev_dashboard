import { WorkoutLog } from "./workout-logs";

export interface UserProfileModel {
  id: number;
  name: string;
  email: string;
  birth_of_date: string;
  created_at: string;
  subscription: {
    name: string;
    start_date: string;
    end_date: string;
  };
  progress_history: WieghtProgress[];
  workout_logs: WorkoutLog[];
}

interface WieghtProgress {
  date: string;
  value: number;
}

export const getProgressHistoryChartData = ({
  weightProgress,
}: {
  weightProgress: WieghtProgress[];
}) => {
  let data;

  data = {
    catgeories: weightProgress.map((obj, i) => {
      return obj.date;
    }),
    series: weightProgress.map((obj, i) => {
      return obj.value;
    }),
  };

  return data;
};

export const userProfile: UserProfileModel = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  birth_of_date: "1990-05-15",
  created_at: "2023-01-10",
  subscription: {
    name: "Premium",
    start_date: "2023-01-01",
    end_date: "2024-01-01",
  },
  progress_history: [
    { date: "2023-02-01", value: 78 },
    { date: "2023-03-01", value: 76 },
    { date: "2023-04-01", value: 75 },
    { date: "2023-05-01", value: 74 },
  ],
  workout_logs: [
    { id: 101, workout_name: "Yoga Session", type: "join", date: "2023-03-05" },
    {
      id: 102,
      workout_name: "Strength Training",
      type: "complete",
      date: "2023-03-06",
    },
    { id: 103, workout_name: "Cardio Blast", type: "join", date: "2023-03-10" },
    {
      id: 104,
      workout_name: "HIIT Workout",
      type: "complete",
      date: "2023-03-11",
    },
    { id: 105, workout_name: "Pilates", type: "join", date: "2023-03-15" },
    { id: 106, workout_name: "Cycling", type: "complete", date: "2023-03-16" },
  ],
};
