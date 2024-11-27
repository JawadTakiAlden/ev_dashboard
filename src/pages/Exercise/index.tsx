import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { exercises } from "../../tables-def/excercise";
import ExcerciseCard from "./components/ExcerciseCard";
import { gridSpacing } from "../../config";

const Exercise = () => {
  return (
    <Box>
      <Grid container spacing={gridSpacing} alignItems={"stretch"}>
        {exercises.map((exercise, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ExcerciseCard key={i} exercise={exercise} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Exercise;
