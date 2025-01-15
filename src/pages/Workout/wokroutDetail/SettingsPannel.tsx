import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WorkoutForm, {
  ExerciseSelected,
  useCreateWorkout,
} from "../components/WorkoutForm";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { useDeleteWorkout, useUpdateWorkout } from "../../../api/workout";
import { WorkoutDetail } from "../../../tables-def/workout";

const SettingsPannel = ({ workout }: { workout: WorkoutDetail }) => {
  const deleteWorkout = useDeleteWorkout();
  const { setExer } = useCreateWorkout();
  const updateWorkout = useUpdateWorkout();
  useEffect(() => {
    const exercisesSelected = workout.exercises.map((exer) => {
      return {
        exercise_id: exer.id,
        exerciseType: "sets",
        name: exer.name,
        reps: exer.WorkoutExercise.reps,
        sets: exer.WorkoutExercise.sets,
        duration: exer.duration,
      };
    });
    setExer(exercisesSelected as ExerciseSelected[]);
  }, []);
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <WorkoutForm
            task="update"
            initialValues={{
              title: workout.title,
              description: workout.description,
              difficulty_level: workout.difficulty_level,
              duration: workout.duration,
              type: workout.type,
              calories_burned: 0,
              image: workout.image,
              package_id: workout.package_id,
              user_id: workout.user_id,
              exercises: [],
            }}
            onSubmit={(values) => {
              updateWorkout.mutate(values);
            }}
          />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Box id="delete-exercise">
            <DeleteTypography mb={2}>Delete Workout</DeleteTypography>

            <Typography mb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem
              quod enim minima nostrum dolorem doloremque libero dolor quidem
              ipsam, eaque soluta ex nobis! Itaque excepturi blanditiis ab quasi
              temporibus.
            </Typography>

            <DoupleClickToConfirm
              color="error"
              onClick={() => {
                deleteWorkout.mutate();
              }}
            >
              Delete
            </DoupleClickToConfirm>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsPannel;
