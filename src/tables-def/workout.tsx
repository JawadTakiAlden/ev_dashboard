import { Exercise } from "./excercise";

export interface WorkoutModel {
  id: number;
  title: string;
  description: string;
  type: "group" | "personalized";
  difficulty_level: string;
  duration: number;
  coach: string;
  user?: {
    id: number;
    name: string;
  };
  date: string;
}

export interface WorkoutDetail extends WorkoutModel {
  exercises: WorkoutExercise[];
  workout_completion: WorkoutCompletion[];
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

const workoutCompletion = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  user: {
    id: Math.floor(Math.random() * 100) + 1,
    name: `User ${i + 1}`,
  },
  createdAt: new Date(2024, 10, i + 1).toISOString(),
  updatedAt: new Date(2024, 10, i + 1, 1, 0, 0).toISOString(),
}));

function generateWorkoutExercises(count: number = 30): WorkoutExercise[] {
  return Array.from({ length: count }, (_, i) => ({
    sets: Math.floor(Math.random() * 5) + 1, // Random sets between 1 and 5
    reps: Math.floor(Math.random() * 15) + 5, // Random reps between 5 and 15
    exercise: {
      id: i + 1,
      name: `Exercise ${i + 1}`,
      description: `Description for Exercise ${i + 1}`,
      duration: Math.floor(Math.random() * 10) + 5, // Random duration between 5 and 15 minutes
      image_url: `https://picsum.photos/200/300?random=${i + 1}`,
      target_muscles_image: `https://picsum.photos/200/300?random=${i + 2}`,
      video_url: `https://www.youtube.com/watch?v=video${i + 1}`,
      createdAt: new Date(`2024-10-${Math.floor(Math.random() * 30) + 1}`),
      updatedAt: new Date(),
    },
  }));
}

export const workoutDetail: WorkoutDetail = {
  id: 1,
  title: "Morning Yoga",
  description: "A calming yoga session to start your day.",
  type: "group",
  difficulty_level: "Beginner",
  duration: 30,
  coach: "Emily Green",
  user: {
    id: 101,
    name: "John Doe",
  },
  date: "2024-11-01",
  exercises: generateWorkoutExercises(),
  workout_completion: workoutCompletion,
};

export const workouts: WorkoutModel[] = [
  {
    id: 1,
    title: "Morning Yoga",
    description: "A calming yoga session to start your day.",
    type: "group",
    difficulty_level: "Beginner",
    duration: 30,
    coach: "Emily Green",
    user: { id: 101, name: "John Doe" },
    date: "2024-11-01",
  },
  {
    id: 2,
    title: "HIIT Blast",
    description: "High-intensity interval training for rapid calorie burn.",
    type: "group",
    difficulty_level: "Intermediate",
    duration: 45,
    coach: "Mike Brown",
    user: { id: 102, name: "Sarah Johnson" },
    date: "2024-11-02",
  },
  {
    id: 3,
    title: "Strength Training Basics",
    description:
      "Learn the fundamentals of weightlifting and strength building.",
    type: "personalized",
    difficulty_level: "Beginner",
    duration: 60,
    coach: "Jane Smith",
    user: { id: 103, name: "Alex Kim" },
    date: "2024-11-03",
  },
  {
    id: 4,
    title: "Marathon Prep",
    description: "Train like a pro for your next marathon.",
    type: "personalized",
    difficulty_level: "Advanced",
    duration: 90,
    coach: "David Lee",
    user: { id: 104, name: "Chris Evans" },
    date: "2024-11-04",
  },
  {
    id: 5,
    title: "Zumba Dance Party",
    description: "Dance your way to fitness with Zumba.",
    type: "group",
    difficulty_level: "Beginner",
    duration: 50,
    coach: "Sophia Martinez",
    user: { id: 105, name: "Anna Wright" },
    date: "2024-11-05",
  },
  {
    id: 6,
    title: "Cardio Kickboxing",
    description: "A high-energy kickboxing session to boost endurance.",
    type: "group",
    difficulty_level: "Intermediate",
    duration: 40,
    coach: "Jake Williams",
    user: { id: 106, name: "Tom Hardy" },
    date: "2024-11-06",
  },
  {
    id: 7,
    title: "Core Strength",
    description: "Build a strong core with targeted exercises.",
    type: "personalized",
    difficulty_level: "Advanced",
    duration: 30,
    coach: "Emma Johnson",
    user: { id: 107, name: "Lisa White" },
    date: "2024-11-07",
  },
  {
    id: 8,
    title: "Pilates Reboot",
    description: "Rejuvenate your body with a Pilates workout.",
    type: "group",
    difficulty_level: "Intermediate",
    duration: 35,
    coach: "Laura Adams",
    user: { id: 108, name: "James Bond" },
    date: "2024-11-08",
  },
  {
    id: 9,
    title: "CrossFit Challenge",
    description: "Push your limits with this CrossFit workout.",
    type: "personalized",
    difficulty_level: "Advanced",
    duration: 60,
    coach: "Oliver Davis",
    user: { id: 109, name: "Bruce Wayne" },
    date: "2024-11-09",
  },
  {
    id: 10,
    title: "Evening Stretch",
    description: "Relax and unwind with an evening stretching session.",
    type: "group",
    difficulty_level: "Beginner",
    duration: 20,
    coach: "Linda Carter",
    user: { id: 110, name: "Clark Kent" },
    date: "2024-11-10",
  },
];
