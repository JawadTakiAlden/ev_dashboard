import { MRT_ColumnDef } from "material-react-table";

export interface DeliveryTime {
  id: number;
  title: string;
}

export const deliveryTimesColumns: MRT_ColumnDef<DeliveryTime>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
];
