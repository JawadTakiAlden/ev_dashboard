export interface WorkoutModel {
  id: number;
  title: string;
  description: string;
  type: "group" | "personalized";
  difficulty_level: string;
  duration: number;
  coach: string;
  image: string;
  user?: {
    id: number;
    name: string;
  };
  createdAt: string;
}

export interface WorkoutDetail extends WorkoutModel {
  exercises: Exercise[];
  workout_completion: WorkoutCompletion[];
  package_id: string;
  user_id: string;
  coach: string;
}

interface Exercise {
  id: number;
  name: string;
  description: string;
  duration: number | null;
  image_url: string;
  target_muscles_image: string;
  video_url: string;
  createdAt: string;
  updatedAt: string;
  WorkoutExercise: WorkoutExerciseDetails;
}

interface WorkoutExerciseDetails {
  sets: number;
  reps: number;
}

export interface WorkoutExercise {
  sets: number;
  reps: number;
  exercise: Exercise;
}

export interface WorkoutCompletion {
  id?: number;
  user: {
    id: number;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}
