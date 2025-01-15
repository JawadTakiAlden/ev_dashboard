import { Stack } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DeleteSport from "../pages/admin/sports/components/DeleteSport";
import UpdateSport from "../pages/admin/sports/components/UpdateSport";

export interface Sport {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export const sportColumns: MRT_ColumnDef<Sport>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleString(),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    Cell: ({ row }) => (
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <UpdateSport sport={row.original} />
        <DeleteSport sport={row.original} />
      </Stack>
    ),
  },
];
