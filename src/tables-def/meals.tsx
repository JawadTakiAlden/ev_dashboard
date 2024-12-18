import { MealIngreadiant } from "./meal-ingrediant";
import { MealType } from "./meal-types";

export interface Meal {
  id?: number;
  name: string;
  description?: string;
  calories: number;
  image_url: string;
  types: MealType[];
  protein: number;
  carb?: number;
  fats: number;
  fiber: number;
  ingredients: MealIngreadiant[];
}
