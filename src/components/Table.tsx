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
    const badTypes: string[] = ["function", "object"];
    const rowData = rows.map((row) => {
      const availableKeys = Object.keys(row.original).filter((key) => {
        return !badTypes.includes(`${typeof row.original[key]}`);
      });
      type ObjectToExport = {
        [key: string]: any;
      };
      const objectToExport: ObjectToExport = availableKeys.reduce(
        (pre, cur) => {
          return {
            ...pre,
            [cur]: row.original[cur],
          };
        },
        {}
      );
      return objectToExport;
    });
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  tableInstanceProps = {
    enableFullScreenToggle: false,
    enableColumnFilters: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableColumnOrdering: false,
    enableSorting: false,
    enableHiding: false,
    enableTopToolbar: withExport,
    renderTopToolbarCustomActions: ({ table }) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
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
