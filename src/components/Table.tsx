import React from "react";
import {
  MaterialReactTable,
  MRT_Row,
  MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import { generateCsv, mkConfig, download, ConfigOptions } from "export-to-csv";
import { Box, Button } from "@mui/material";

interface AppTableProps {
  exportConfig?: ConfigOptions;
  withExport?: boolean;
}

const Table = ({
  exportConfig,
  withExport = false,
  ...tableInstanceProps
}: MRT_TableOptions<any> & AppTableProps) => {
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
    ...exportConfig,
  });

  const handleExportRows = (rows: MRT_Row<any>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  tableInstanceProps = {
    enableFullScreenToggle: false,
    enableColumnFilters: false,
    enableColumnActions: false,
    enableColumnOrdering: false,
    enableSorting: false,
    enableHiding: false,
    enableTopToolbar: withExport,
    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            px: 2,
            py: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
          >
            Export to CSV
          </Button>
        </Box>
      );
    },
    ...tableInstanceProps,
  };
  const table = useMaterialReactTable(tableInstanceProps);

  return <MaterialReactTable table={table} />;
};

export default Table;
