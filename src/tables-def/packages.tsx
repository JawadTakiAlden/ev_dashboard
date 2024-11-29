import { Stack } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
// import DeletePriceButton from "../pages/packages/components/DeletePriceButton";
import UpdatePriceButton from "../pages/packages/components/UpdatePriceButton";

export interface Pricing {
  id: number;
  title: string;
  price: number;
  numberOfDays: number;
  packageId: number;
}

export interface Package {
  id?: number;
  name: string;
  description?: string;
  type: "group" | "personalized";
  pricings: Pricing[];
}

export const pricingColumns: MRT_ColumnDef<Pricing>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price (SAR)",
    Cell: ({ cell }) => `SAR${cell.getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "numberOfDays",
    header: "Number of Days",
  },
  {
    id: "actions",
    header: "Actions",
    Cell: ({ row }) => (
      <Stack flexDirection={"row"} gap={1}>
        {/* <DeletePriceButton /> */}
        <UpdatePriceButton price={row.original} />
      </Stack>
    ),
  },
];

export const pricings: Pricing[] = [
  {
    id: 1,
    title: "Monthly Plan",
    price: 49.99,
    numberOfDays: 30,
    packageId: 1,
  },
  {
    id: 2,
    title: "Quarterly Plan",
    price: 139.99,
    numberOfDays: 90,
    packageId: 1,
  },
  {
    id: 3,
    title: "Monthly Plan",
    price: 69.99,
    numberOfDays: 30,
    packageId: 2,
  },
  {
    id: 4,
    title: "Annual Plan",
    price: 749.99,
    numberOfDays: 365,
    packageId: 2,
  },
  {
    id: 5,
    title: "Weekly Plan",
    price: 19.99,
    numberOfDays: 7,
    packageId: 3,
  },
];

export const packages: Package[] = [
  {
    id: 1,
    name: "Gold Package",
    description: "Premium package for group coaching",
    type: "group",
    pricings: [
      {
        id: 1,
        title: "Monthly Plan",
        price: 49.99,
        numberOfDays: 30,
        packageId: 1,
      },
      {
        id: 2,
        title: "Quarterly Plan",
        price: 139.99,
        numberOfDays: 90,
        packageId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Silver Package",
    description: "Basic package for personalized coaching",
    type: "personalized",
    pricings: [
      {
        id: 3,
        title: "Monthly Plan",
        price: 69.99,
        numberOfDays: 30,
        packageId: 2,
      },
      {
        id: 4,
        title: "Annual Plan",
        price: 749.99,
        numberOfDays: 365,
        packageId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Bronze Package",
    description: "Entry-level package for group coaching",
    type: "group",
    pricings: [
      {
        id: 5,
        title: "Weekly Plan",
        price: 19.99,
        numberOfDays: 7,
        packageId: 3,
      },
    ],
  },
  {
    id: 4,
    name: "New Package",
    description: "Entry-level package for group coaching",
    type: "group",
    pricings: [],
  },
];
