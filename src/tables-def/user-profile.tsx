import { WorkoutLog } from "./workout-logs";

export interface UserProfileModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  gender: string | null;
  sport: string | null;
  goal: string | null;
  training_location: string | null;
  sport_duration: string | null;
  age: number | null;
  height: number | null;
  dietary_preferences: string | null;
  is_set_up: boolean;
  is_active: boolean;
  deactivated_at: string | null;
  createdAt: string;
  updatedAt: string;
  fitness_subscriptions: FitnessSubscription[];
  survey_answers: SurveyAnswer[];
  meal_selections: MealSelection[];
  diet_subscriptions: DietSubscription[];
  workout_attendances: WorkoutAttendance[];
  workouts_completed: WorkoutCompleted[];
  exercises_completed: ExerciseCompleted[];
  weight_record: WeightRecord[];
}

export interface FitnessSubscription {
  days_left: number;
  id: number;
  user_id: number;
  package_id: number;
  pricing_id: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface SurveyAnswer {
  // Define fields if applicable or leave as empty interface if unknown
}

interface MealSelection {
  id: number;
  user_id: number;
  meal_id: number;
  day: string;
  meal_subscription_id: number;
  createdAt: string;
  updatedAt: string;
}

interface DietSubscription {
  id: number;
  type: string;
  meal_plan_id: number;
  user_id: number;
  is_active: boolean;
  start_date: string;
  end_date: string;
  delivery_time_id: number;
  address_id: number;
  createdAt: string;
  updatedAt: string;
}

interface WorkoutAttendance {
  id: number;
  user_id: number;
  workout_id: number;
  createdAt: string;
  updatedAt: string;
}

interface WorkoutCompleted {
  id: number;
  user_id: number;
  workout_id: number;
  createdAt: string;
  updatedAt: string;
  workout: WorkoutDetails;
}

interface WorkoutDetails {
  id: number;
  title: string;
  type: string;
  difficulty_level: string;
  description: string;
  duration: number;
  coach: number;
  user_id: number;
  day: string;
  package_id: number;
  createdAt: string;
  updatedAt: string;
}

interface ExerciseCompleted {
  id: number;
  user_id: number;
  exercise_id: number;
  createdAt: string;
  updatedAt: string;
}

interface WeightRecord {
  id: number;
  user_id: number;
  weight: number;
  createdAt: string;
  updatedAt: string;
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
