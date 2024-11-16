import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import Table from "../../../components/Table";
import { userTableColumns } from "../../../tables-def/users";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const AllUsers = () => {
  return (
    <Box>
      <Table
        withExport
        enableRowActions
        renderRowActions={({ row }) => {
          return (
            <Tooltip title={"profile"}>
              <IconButton
                color="info"
                component={Link}
                to={`${row.original.id}`}
              >
                <CgProfile />
              </IconButton>
            </Tooltip>
          );
        }}
        data={[
          {
            id: "1",
            name: "jawad",
            phone: "0948966979",
            email: "jawad.taki.alden2002@gmail.com",
          },
        ]}
        columns={userTableColumns}
      />
    </Box>
  );
};

export default AllUsers;
