import { MealIngreadiant } from "./meal-ingrediant";

export interface Meal {
  id?: number;
  name: string;
  description?: string;
  calories: number;
  image_url: string;
  type: string;
  protein: number;
  carbohydrates?: number;
  fats: number;
  fiber: number;
  ingredients: MealIngreadiant[];
}

export const meals: Meal[] = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    description:
      "A healthy salad with grilled chicken, fresh vegetables, and a light dressing.",
    calories: 350,
    image_url: "https://via.placeholder.com/150",
    type: "Salad",
    protein: 30,
    carbohydrates: 10,
    fats: 15,
    fiber: 5,
    ingredients: [
      { id: 1, title: "Chicken Breast" },
      { id: 2, title: "Lettuce" },
      { id: 3, title: "Tomato" },
      { id: 4, title: "Cucumber" },
    ],
  },
  {
    id: 2,
    name: "Beef Burger",
    description: "A juicy beef burger with cheese, lettuce, and tomato.",
    calories: 600,
    image_url: "https://via.placeholder.com/150",
    type: "Fast Food",
    protein: 35,
    carbohydrates: 40,
    fats: 25,
    fiber: 3,
    ingredients: [
      { id: 5, title: "Beef Patty" },
      { id: 6, title: "Cheddar Cheese" },
      { id: 7, title: "Lettuce" },
      { id: 8, title: "Tomato" },
      { id: 9, title: "Burger Bun" },
    ],
  },
  {
    id: 3,
    name: "Vegetarian Pasta",
    description:
      "A delicious pasta dish with mixed vegetables and a rich tomato sauce.",
    calories: 400,
    image_url: "https://via.placeholder.com/150",
    type: "Pasta",
    protein: 15,
    carbohydrates: 60,
    fats: 10,
    fiber: 8,
    ingredients: [
      { id: 10, title: "Pasta" },
      { id: 11, title: "Tomato Sauce" },
      { id: 12, title: "Bell Peppers" },
      { id: 13, title: "Zucchini" },
      { id: 14, title: "Onion" },
    ],
  },
];
