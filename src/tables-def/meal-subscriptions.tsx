import { MRT_ColumnDef } from "material-react-table";
import { UserModel } from "./users";
import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MealPlan } from "./meal-plans";

export interface MealSubscriptionModel {
  id: number;
  type: "weekly" | "monthly";
  meal_plan: MealPlan;
  user: UserModel;
  start_date: string;
  end_data: string;
  is_active: boolean;
}

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
