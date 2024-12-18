import { Button, Stack, Typography } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import React from "react";

const LoadingDataError = ({
  refetch,
}: {
  refetch: UseQueryResult["refetch"];
}) => {
  return (
    <Stack alignItems={"center"}>
      <Typography>Error while loading data</Typography>
      <Button onClick={() => refetch()}>refetch</Button>
    </Stack>
  );
};

export default LoadingDataError;
