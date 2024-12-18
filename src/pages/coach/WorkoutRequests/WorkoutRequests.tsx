import { Box } from "@mui/material";
import React from "react";
import Table from "../../../components/Table";
import {
  workoutRequests,
  workoutRequestsColumns,
} from "../../../tables-def/workout-request";

const WorkoutRequests = () => {
  return (
    <Box>
      <Table data={workoutRequests} columns={workoutRequestsColumns} />
    </Box>
  );
};

export default WorkoutRequests;
