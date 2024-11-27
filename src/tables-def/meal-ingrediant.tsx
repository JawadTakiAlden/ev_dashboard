import { MRT_ColumnDef } from "material-react-table";

export interface MealIngreadiant {
  id: number;
  title: string;
}

export const mealIngredients: MealIngreadiant[] = [
  { id: 1, title: "Salt" },
  { id: 2, title: "Pepper" },
  { id: 3, title: "Onion" },
  { id: 4, title: "Garlic" },
  { id: 5, title: "Tomato" },
  { id: 6, title: "Cheese" },
  { id: 7, title: "Basil" },
  { id: 8, title: "Olive Oil" },
  { id: 9, title: "Chicken" },
  { id: 10, title: "Beef" },
];

export const ingrediantColumns: MRT_ColumnDef<MealIngreadiant>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: "title",
    header: "Ingredient Title",
  },
];
