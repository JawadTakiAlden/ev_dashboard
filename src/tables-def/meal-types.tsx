import { MRT_ColumnDef } from "material-react-table";
export interface MealType {
  id: number;
  title: string;
}

export const mealTypes: MealType[] = [
  { id: 1, title: "Breakfast" },
  { id: 2, title: "Lunch" },
  { id: 3, title: "Dinner" },
  { id: 4, title: "Snacks" },
  { id: 5, title: "Dessert" },
  { id: 6, title: "Vegan" },
  { id: 7, title: "Vegetarian" },
  { id: 8, title: "Seafood" },
  { id: 9, title: "Grill" },
  { id: 10, title: "Pasta" },
  { id: 11, title: "Pizza" },
  { id: 12, title: "Salad" },
  { id: 13, title: "Sandwich" },
  { id: 14, title: "Soup" },
  { id: 15, title: "Beverages" },
  { id: 16, title: "Fast Food" },
  { id: 17, title: "BBQ" },
  { id: 18, title: "Appetizer" },
  { id: 19, title: "Main Course" },
  { id: 20, title: "Kids Meal" },
];

export const mealTypesColumns: MRT_ColumnDef<MealType>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
];
