import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import ExcerciseCard from "./components/ExcerciseCard";
import { gridSpacing } from "../../config";
import { useGetExercises } from "../../api/exercise";
import LoadingDataError from "../../components/LoadingDataError";
import { Exercise as ExerciseModel } from "../../tables-def/excercise";

const Exercise = () => {
  const exercises = useGetExercises();

  if (exercises.isError) {
    return <LoadingDataError refetch={exercises.refetch} />;
  }
  return (
    <Box>
      <Grid container spacing={gridSpacing} alignItems={"stretch"}>
        {exercises.isLoading && (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Skeleton width={"100%"} height={200} />
          </Grid>
        )}
        {!exercises.isLoading &&
          exercises?.data?.data.map((exercise: ExerciseModel, i: number) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ExcerciseCard exercise={exercise} />
            </Grid>
          ))}
        {!exercises.isLoading && exercises?.data?.data.length === 0 && (
          <Typography>No exercises yet </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Exercise;
