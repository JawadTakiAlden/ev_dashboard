import {
  alpha,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React, { memo } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { Exercise, exercises } from "../../../tables-def/excercise";
import {
  areEqual,
  FixedSizeList as List,
  ListChildComponentProps,
} from "react-window";
import ExcerciseCard from "../../Exercise/components/ExcerciseCard";
import memoizeOne from "memoize-one";
import DeleteTypography from "../../../components/DeleteTypography";

interface WorkoutFormValues {
  title: string;
  description: string;
  type: "group" | "personalized";
  difficulty_level: string;
  duration: number;
  coach: number | null;
  user: number | null;
  exercises: number[] | null;
}

const createItemData = memoizeOne((items: Exercise[], toggleSelectItem) => ({
  items,
  toggleSelectItem,
}));

interface WorkoutFormProps {
  task?: "update" | "create";
}

const WorkoutForm = ({
  task = "create",
  ...formikProps
}: FormikConfig<WorkoutFormValues> & WorkoutFormProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({ ...formikProps });

  const changeSelectItem = (exerciseId: number) => {
    const isSelected = values.exercises?.includes(exerciseId);

    if (!isSelected) {
      setFieldValue("exercises", [...values.exercises!, exerciseId]);
      return;
    } else {
    }
    const exercisesRemoved = values.exercises?.filter(
      (exercise) => exercise !== exerciseId
    );
    setFieldValue("exercises", exercisesRemoved);
  };

  const allExercises = createItemData(exercises, changeSelectItem);

  const Exercise: React.FC<ListChildComponentProps> = memo(
    ({ index, style, data }) => {
      const { items, toggleSelectItem } = data;
      const isActive = values.exercises?.includes(items[index].id);
      return (
        <div
          style={{
            ...style,
            width: "300px",
          }}
          key={index}
          onClick={() => toggleSelectItem(items[index].id)}
        >
          <ExcerciseCard
            withBorder={isActive}
            noActions={true}
            exercise={items[index]}
          />
        </div>
      );
    },
    areEqual
  );

  return (
    <Box>
      <DeleteTypography
        sx={{
          borderColor: (theme) => alpha(theme.palette.primary.main, 0.3),
          mb: 3,
        }}
      >
        {task} workout
      </DeleteTypography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12, sm: 8, md: 6 }}>
            <Grid container spacing={gridSpacing}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl error={!!touched.title && !!errors.title}>
                  <InputLabel>Title</InputLabel>
                  <OutlinedInput
                    label={"Title"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    name="title"
                    type="text"
                  />
                  {!!touched.title && !!errors.title && (
                    <FormHelperText error>{errors.title}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl
                  error={
                    !!touched.difficulty_level && !!errors.difficulty_level
                  }
                >
                  <InputLabel>Difficulty Level</InputLabel>
                  <OutlinedInput
                    label={"Difficulty Level"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.difficulty_level}
                    name="difficulty_level"
                    type="text"
                  />
                  {!!touched.difficulty_level && !!errors.difficulty_level && (
                    <FormHelperText error>
                      {errors.difficulty_level}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl error={!!touched.duration && !!errors.duration}>
                  <InputLabel>Duration</InputLabel>
                  <OutlinedInput
                    label={"Duration"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.duration}
                    name="duration"
                    type="number"
                  />
                  {!!touched.duration && !!errors.duration && (
                    <FormHelperText error>{errors.duration}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl
                  disabled
                  error={!!touched.duration && !!errors.duration}
                >
                  <FormLabel>Workout Type</FormLabel>
                  <RadioGroup
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    row
                  >
                    <FormControlLabel
                      value="group"
                      control={<Radio readOnly />}
                      label="Group"
                    />
                    <FormControlLabel
                      value="personalized"
                      control={<Radio readOnly />}
                      label="Personalized"
                    />
                  </RadioGroup>
                  {!!touched.type && !!errors.type && (
                    <FormHelperText error>{errors.type}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <FormControl error={!!touched.description && !!errors.description}>
              <InputLabel>Description</InputLabel>
              <OutlinedInput
                label={"Description"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
                type="text"
                multiline
                rows={5}
              />
              {!!touched.description && !!errors.description && (
                <FormHelperText error>{errors.description}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={12}>
            <Box>
              <Typography variant="h4" mb={2}>
                {values.exercises?.length + " "} exercises selected to be in
                this workout
              </Typography>
              <Typography variant="h4" mb={2}>
                Estimated duration for all selected exercises is{" "}
                {allExercises.items
                  .filter((exercise) =>
                    values.exercises?.includes(exercise.id!)
                  )
                  .reduce((cur, pre) => {
                    return cur + pre.duration!;
                  }, 0)}{" "}
                Minutes
              </Typography>
              <List
                itemCount={allExercises.items.length}
                itemSize={310}
                height={380}
                width={1000}
                itemData={allExercises}
                layout="horizontal"
                style={{
                  width: "100%",
                }}
              >
                {Exercise}
              </List>
            </Box>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="outlined"
          sx={{
            my: 2,
            width: { xs: "100%", sm: "initial" },
          }}
        >
          {task}
        </Button>
      </form>
    </Box>
  );
};

export default WorkoutForm;
