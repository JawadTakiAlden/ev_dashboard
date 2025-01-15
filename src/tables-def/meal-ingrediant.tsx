import { MRT_ColumnDef } from "material-react-table";

export interface MealIngreadiant {
  id: number;
  title: string;
  image : string;
}

export const ingrediantColumns: MRT_ColumnDef<MealIngreadiant>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: "title",
    header: "Ingredient Title",
  },
  {
    accessorKey: "image",
    header: "Ingredient Image",
    Cell : ({row}) => {
      return <img 
        src={row.original.image}  
        alt={row.original.title}
        style={{
         width : "100px",
         height : "100px",
         borderRadius : "8px",
         objectFit : "cover"
        }}
     />
    }
  },
];
