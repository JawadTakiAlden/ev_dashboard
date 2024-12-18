import { MealType } from "./meal-types";

export interface MealPlan {
  id?: number;
  title: string;
  calories: number;
  image: string;
  price_monthly: number;
  types: MealType[];
}

export const mealPlans: MealPlan[] = [
  {
    id: 1,
    title: "Healthy Start",
    calories: 350,
    image: "https://via.placeholder.com/500x300?text=Healthy+Start",
    price_monthly: 120,
    meal_types: [
      { id: 1, title: "Breakfast" },
      { id: 2, title: "Snack" },
    ],
  },
  {
    id: 2,
    title: "Vegan Delight",
    calories: 400,
    image: "https://via.placeholder.com/500x300?text=Vegan+Delight",
    price_monthly: 150,
    meal_types: [
      { id: 1, title: "Lunch" },
      { id: 3, title: "Dinner" },
    ],
  },
  {
    id: 3,
    title: "Keto Power",
    calories: 500,
    image: "https://via.placeholder.com/500x300?text=Keto+Power",
    price_monthly: 180,
    meal_types: [
      { id: 2, title: "Snack" },
      { id: 3, title: "Dinner" },
    ],
  },
  {
    id: 4,
    title: "Protein Boost",
    calories: 600,
    image: "https://via.placeholder.com/500x300?text=Protein+Boost",
    price_monthly: 200,
    meal_types: [
      { id: 1, title: "Breakfast" },
      { id: 2, title: "Snack" },
      { id: 3, title: "Lunch" },
    ],
  },
  {
    id: 5,
    title: "Mediterranean Feast",
    calories: 450,
    image: "https://via.placeholder.com/500x300?text=Mediterranean+Feast",
    price_monthly: 140,
    meal_types: [
      { id: 1, title: "Lunch" },
      { id: 3, title: "Dinner" },
    ],
  },
  {
    id: 6,
    title: "Low Carb Meal Plan",
    calories: 300,
    image: "https://via.placeholder.com/500x300?text=Low+Carb+Meal+Plan",
    price_monthly: 110,
    meal_types: [
      { id: 2, title: "Snack" },
      { id: 3, title: "Dinner" },
    ],
  },
  {
    id: 7,
    title: "Smoothie Cleanse",
    calories: 250,
    image: "https://via.placeholder.com/500x300?text=Smoothie+Cleanse",
    price_monthly: 130,
    meal_types: [
      { id: 1, title: "Breakfast" },
      { id: 2, title: "Snack" },
    ],
  },
  {
    id: 8,
    title: "High Fiber Meal Plan",
    calories: 400,
    image: "https://via.placeholder.com/500x300?text=High+Fiber+Meal+Plan",
    price_monthly: 160,
    meal_types: [
      { id: 1, title: "Lunch" },
      { id: 3, title: "Dinner" },
    ],
  },
  {
    id: 9,
    title: "Paleo Plan",
    calories: 500,
    image: "https://via.placeholder.com/500x300?text=Paleo+Plan",
    price_monthly: 170,
    meal_types: [
      { id: 1, title: "Breakfast" },
      { id: 2, title: "Lunch" },
    ],
  },
  {
    id: 10,
    title: "Balanced Diet Plan",
    calories: 450,
    image: "https://via.placeholder.com/500x300?text=Balanced+Diet+Plan",
    price_monthly: 150,
    meal_types: [
      { id: 3, title: "Lunch" },
      { id: 2, title: "Snack" },
    ],
  },
];
