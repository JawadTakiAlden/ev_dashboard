import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import Table from "../../../components/Table";
import { userTableColumns } from "../../../tables-def/users";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useGetUsers } from "../../../api/users";

const AllUsers = () => {
  const users = useGetUsers();
  return (
    <Box>
      <Table
        withExport
        enableRowActions
        state={{
          isLoading: users.isLoading,
        }}
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
        data={users?.data?.data || []}
        columns={userTableColumns}
      />
    </Box>
  );
};

export default AllUsers;
