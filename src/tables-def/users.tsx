import { MRT_ColumnDef } from "material-react-table";

export interface UserModel {
  id: number;

  name: string;

  email: string;

  phone: string;
}

export const userTableColumns: MRT_ColumnDef<UserModel, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: "name",
    header: "Name",
    maxSize: 150,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    maxSize: 150,
  },
  {
    accessorKey: "email",
    header: "Email",
    maxSize: 250,
  },
];
