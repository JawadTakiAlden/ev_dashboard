import { MRT_ColumnDef } from "material-react-table";
import { MealPlanModel } from "./meal-plan";
import { UserModel } from "./users";
import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface MealSubscriptionModel {
  id: number;
  type: "weekly" | "monthly";
  meal_plan: MealPlanModel;
  user: UserModel;
  start_date: string;
  end_data: string;
  is_active: boolean;
}

const mealSubscriptions: MealSubscriptionModel[] = [
  {
    id: 1,
    type: "weekly",
    meal_plan: {
      id: 1,
      title: "Keto Plan",
      calories: "1500 kcal",
      image: "keto-plan.jpg",
      price_weekly: 100,
      price_monthly: 350,
    },
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
    },
    start_date: "2024-11-01",
    end_data: "2024-11-08",
    is_active: true,
  },
  {
    id: 2,
    type: "monthly",
    meal_plan: {
      id: 2,
      title: "Vegan Plan",
      calories: "1200 kcal",
      image: "vegan-plan.jpg",
      price_weekly: 80,
      price_monthly: 300,
    },
    user: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
    },
    start_date: "2024-11-01",
    end_data: "2024-12-01",
    is_active: true,
  },
  {
    id: 3,
    type: "weekly",
    meal_plan: {
      id: 3,
      title: "Paleo Plan",
      calories: "1800 kcal",
      image: "paleo-plan.jpg",
      price_weekly: 110,
      price_monthly: 400,
    },
    user: {
      id: 3,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "1112223333",
    },
    start_date: "2024-11-10",
    end_data: "2024-11-17",
    is_active: false,
  },
  {
    id: 4,
    type: "monthly",
    meal_plan: {
      id: 4,
      title: "Low Carb Plan",
      calories: "1600 kcal",
      image: "low-carb-plan.jpg",
      price_weekly: 90,
      price_monthly: 320,
    },
    user: {
      id: 4,
      name: "Bob White",
      email: "bob@example.com",
      phone: "4445556666",
    },
    start_date: "2024-10-15",
    end_data: "2024-11-15",
    is_active: true,
  },
  {
    id: 5,
    type: "weekly",
    meal_plan: {
      id: 5,
      title: "Mediterranean Plan",
      calories: "2000 kcal",
      image: "mediterranean-plan.jpg",
      price_weekly: 120,
      price_monthly: 450,
    },
    user: {
      id: 5,
      name: "Charlie Green",
      email: "charlie@example.com",
      phone: "7778889999",
    },
    start_date: "2024-11-05",
    end_data: "2024-11-12",
    is_active: true,
  },
  {
    id: 6,
    type: "monthly",
    meal_plan: {
      id: 6,
      title: "Gluten-Free Plan",
      calories: "1300 kcal",
      image: "gluten-free-plan.jpg",
      price_weekly: 85,
      price_monthly: 310,
    },
    user: {
      id: 6,
      name: "Diana Lee",
      email: "diana@example.com",
      phone: "5554443333",
    },
    start_date: "2024-11-01",
    end_data: "2024-12-01",
    is_active: true,
  },
  {
    id: 7,
    type: "weekly",
    meal_plan: {
      id: 7,
      title: "High Protein Plan",
      calories: "2200 kcal",
      image: "high-protein-plan.jpg",
      price_weekly: 130,
      price_monthly: 480,
    },
    user: {
      id: 7,
      name: "Eve Black",
      email: "eve@example.com",
      phone: "6667778888",
    },
    start_date: "2024-11-07",
    end_data: "2024-11-14",
    is_active: false,
  },
  {
    id: 8,
    type: "monthly",
    meal_plan: {
      id: 8,
      title: "Detox Plan",
      calories: "1000 kcal",
      image: "detox-plan.jpg",
      price_weekly: 75,
      price_monthly: 280,
    },
    user: {
      id: 8,
      name: "Frank Gray",
      email: "frank@example.com",
      phone: "8889990000",
    },
    start_date: "2024-11-05",
    end_data: "2024-12-05",
    is_active: true,
  },
  {
    id: 9,
    type: "weekly",
    meal_plan: {
      id: 9,
      title: "Balanced Plan",
      calories: "1700 kcal",
      image: "balanced-plan.jpg",
      price_weekly: 95,
      price_monthly: 350,
    },
    user: {
      id: 9,
      name: "Grace Blue",
      email: "grace@example.com",
      phone: "2223334444",
    },
    start_date: "2024-11-02",
    end_data: "2024-11-09",
    is_active: false,
  },
  {
    id: 10,
    type: "monthly",
    meal_plan: {
      id: 10,
      title: "Intermittent Fasting Plan",
      calories: "1400 kcal",
      image: "fasting-plan.jpg",
      price_weekly: 100,
      price_monthly: 360,
    },
    user: {
      id: 10,
      name: "Hannah Gold",
      email: "hannah@example.com",
      phone: "9990001111",
    },
    start_date: "2024-11-03",
    end_data: "2024-12-03",
    is_active: true,
  },
];

export const mealSubscriptionColumns: MRT_ColumnDef<MealSubscriptionModel>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: "user.name",
    header: "Username",
    size: 150,
    Cell: ({ row }) => (
      <Typography
        component={Link}
        variant="subtitle2"
        to={`/admin/dashboard/users/${row.original.user.id}`}
        sx={{
          textDecoration: "none",
          color: "text.primary",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        {row.original.user.name}
      </Typography>
    ),
  },
  {
    accessorKey: "meal_plan.title",
    header: "Meal Title",
    size: 200,
  },
  {
    accessorKey: "type",
    header: "Subscription Type",
    size: 120,
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    size: 120,
    Cell: ({ cell }) =>
      new Date(cell.getValue() as string).toLocaleDateString(),
  },
  {
    accessorKey: "end_data",
    header: "End Date",
    size: 120,
    Cell: ({ cell }) =>
      new Date(cell.getValue() as string).toLocaleDateString(),
  },
  {
    accessorKey: "is_active",
    header: "Active Status",
    size: 100,
    Cell: ({ cell }) => (
      <Chip
        sx={{
          width: "100px",
        }}
        color={cell.getValue() ? "secondary" : "warning"}
        label={cell.getValue() ? "Active" : "Un Active"}
      />
    ),
  },
];

export default mealSubscriptions;
