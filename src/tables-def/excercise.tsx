export interface Exercise {
  id?: number;
  name: string;
  description?: string;
  duration?: number;
  image_urls?: string[];
  target_muscles_image?: string;
  video_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
  notes: string[];
}

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Push-Ups",
    description:
      "A basic upper body strength exercise. A basic upper body strength exerciseA basic upper body strength exercise",
    duration: 10,
    image_url: "https://picsum.photos/200?image=1",
    target_muscles_image: "https://picsum.photos/200?image=2",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: 2,
    name: "Squats",
    description: "A fundamental lower body exercise.",
    duration: 15,
    image_url: "https://picsum.photos/200?image=3",
    target_muscles_image: "https://picsum.photos/200?image=4",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: 3,
    name: "Plank",
    description: "Core strengthening exercise.",
    duration: 30,
    image_url: "https://picsum.photos/200?image=5",
    target_muscles_image: "https://picsum.photos/200?image=6",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-04"),
  },
  {
    id: 4,
    name: "Lunges",
    description: "A lower body workout focusing on legs and balance.",
    duration: 20,
    image_url: "https://picsum.photos/200?image=7",
    target_muscles_image: "https://picsum.photos/200?image=8",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: 5,
    name: "Bicep Curls",
    description: "Build arm strength with this exercise.",
    duration: 15,
    image_url: "https://picsum.photos/200?image=9",
    target_muscles_image: "https://picsum.photos/200?image=10",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-06"),
  },
  {
    id: 6,
    name: "Pull-Ups",
    description: "Strengthen your back and arms.",
    duration: 10,
    image_url: "https://picsum.photos/200?image=11",
    target_muscles_image: "https://picsum.photos/200?image=12",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-07"),
  },
  {
    id: 7,
    name: "Deadlift",
    description: "A compound exercise to target multiple muscle groups.",
    duration: 25,
    image_url: "https://picsum.photos/200?image=13",
    target_muscles_image: "https://picsum.photos/200?image=14",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-08"),
  },
  {
    id: 8,
    name: "Mountain Climbers",
    description: "A cardio exercise that works your whole body.",
    duration: 12,
    image_url: "https://picsum.photos/200?image=15",
    target_muscles_image: "https://picsum.photos/200?image=16",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-09"),
  },
  {
    id: 9,
    name: "Bench Press",
    description: "A classic upper body exercise for chest and triceps.",
    duration: 20,
    image_url: "https://picsum.photos/200?image=17",
    target_muscles_image: "https://picsum.photos/200?image=18",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: 10,
    name: "Burpees",
    description: "A full-body exercise for strength and cardio.",
    duration: 15,
    image_url: "https://picsum.photos/200?image=19",
    target_muscles_image: "https://picsum.photos/200?image=20",
    video_url: "https://www.youtube.com/watch?v=dFXfVno_m9o",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-11"),
  },
];
