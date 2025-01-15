import { MRT_ColumnDef } from "material-react-table";
import { PriceModel } from "./price";
import { UserModel } from "./users";
import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Package } from "./packages";

export interface SubscriptionModel {
  id: number;
  user: UserModel;
  package: Package;
  price: PriceModel;
  start_date: string;
  end_date: string;
  is_active: boolean;
  subscription_type: "group" | "personalized";
}

export const subscriptionsColumns: MRT_ColumnDef<SubscriptionModel, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: "user.name",
    header: "Username",
    maxSize: 150,
    Cell: ({ row }) => (
      <Typography
        component={Link}
        variant="subtitle2"
        to={`/dashboard/users/${row.original.user.id}`}
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
    accessorKey: "package.name",
    header: "Package",
    maxSize: 150,
  },
  {
    accessorKey: "pricing.title",
    header: "Price",
    maxSize: 150,
  },
  {
    accessorKey: "package.type",
    header: "Type",
    maxSize: 150,
    enableColumnFilter: true,
    filterVariant: "select",
    enableColumnActions: true,
    filterSelectOptions: [
      {
        value: "group",
        label: "Group Coaching",
      },
      {
        value: "personalized",
        label: "Personalized Coaching",
      },
    ],
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    maxSize: 150,
  },
  {
    accessorKey: "end_date",
    header: "End Date",
    maxSize: 150,
  },
  {
    accessorKey: "is_active",
    header: "Status",
    enableColumnActions: true,
    enableColumnFilter: true,
    filterVariant: "checkbox",
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
