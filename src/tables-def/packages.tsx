import { Stack } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import UpdatePriceButton from "../pages/packages/components/UpdatePriceButton";
import DeletePriceButton from "../pages/packages/components/DeletePriceButton";

export interface Pricing {
  id: number;
  title: string;
  price: number;
  number_of_days: number;
  package_id: number;
}

export interface Package {
  id?: number;
  name: string;
  description?: string;
  type: "group" | "personalized";
  pricings?: Pricing[];
}

export const pricingColumns = (withActions = true) => {
  let pricingColumns: MRT_ColumnDef<Pricing>[] = [
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
      accessorKey: "number_of_days",
      header: "Number of Days",
    },
  ];

  if (withActions) {
    pricingColumns = [
      ...pricingColumns,
      {
        id: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <Stack flexDirection={"row"} gap={1}>
            <UpdatePriceButton price={row.original} />
            <DeletePriceButton price={row.original} />
          </Stack>
        ),
      },
    ];
  }

  return pricingColumns;
};
