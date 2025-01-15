import { MRT_ColumnDef } from "material-react-table";

const roleMapper: { [key: string]: string } = {
  admin: "Admin",
  coach: "Coach",
  kitchen_staff: "Kitchen",
  consumer: "Consumer",
};

export interface UserModel {
  id: number;

  name: string;

  email: string;

  phone: string;

  role: string;
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
  {
    accessorFn: (row) => roleMapper[row.role],
    header: "Type",
    maxSize: 250,
  },
];
