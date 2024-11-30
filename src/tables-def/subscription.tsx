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

export const subscriptions: SubscriptionModel[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    package: {
      id: 1,
      name: "Gold",
      description: "Premium package",
      type: "group",
    },
    price: { id: 1, title: "Monthly Plan", price: 99.99, number_of_days: 30 },
    start_date: "2024-11-01",
    end_date: "2024-11-30",
    is_active: true,
    subscription_type: "group",
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "234-567-8901",
    },
    package: {
      id: 2,
      name: "Silver",
      description: "Standard package",
      type: "group",
    },
    price: {
      id: 2,
      title: "Quarterly Plan",
      price: 249.99,
      number_of_days: 90,
    },
    start_date: "2024-09-01",
    end_date: "2024-11-30",
    is_active: true,
    subscription_type: "personalized",
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "345-678-9012",
    },
    package: {
      id: 3,
      name: "Bronze",
      description: "Basic package",
      type: "group",
    },
    price: { id: 3, title: "Annual Plan", price: 899.99, number_of_days: 365 },
    start_date: "2024-01-01",
    end_date: "2024-12-31",
    is_active: false,
    subscription_type: "group",
  },
  {
    id: 4,
    user: {
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      phone: "456-789-0123",
    },
    package: {
      id: 1,
      name: "Gold",
      description: "Premium package",
      type: "group",
    },
    price: { id: 1, title: "Monthly Plan", price: 99.99, number_of_days: 30 },
    start_date: "2024-10-01",
    end_date: "2024-10-31",
    is_active: true,
    subscription_type: "personalized",
  },
  {
    id: 5,
    user: {
      id: 5,
      name: "Chris Wilson",
      email: "chris@example.com",
      phone: "567-890-1234",
    },
    package: {
      id: 2,
      name: "Silver",
      description: "Standard package",
      type: "group",
    },
    price: {
      id: 2,
      title: "Quarterly Plan",
      price: 249.99,
      number_of_days: 90,
    },
    start_date: "2024-07-01",
    end_date: "2024-09-30",
    is_active: false,
    subscription_type: "group",
  },
];

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
    accessorKey: "package.name",
    header: "Package",
    maxSize: 150,
  },
  {
    accessorKey: "price.title",
    header: "Price",
    maxSize: 150,
  },
  {
    accessorKey: "subscription_type",
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
