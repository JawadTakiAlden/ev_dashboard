import { Box, Typography } from "@mui/material";
import React from "react";
import AddUser from "./AddUser";

const CreateUser = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Create New User
      </Typography>
      <AddUser />
    </Box>
  );
};

export default CreateUser;
