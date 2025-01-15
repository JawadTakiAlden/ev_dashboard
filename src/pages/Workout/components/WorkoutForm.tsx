import {
  alpha,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React, { memo, useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { Exercise } from "../../../tables-def/excercise";
import {
  areEqual,
  FixedSizeList as List,
  ListChildComponentProps,
} from "react-window";
import ExcerciseCard from "../../Exercise/components/ExcerciseCard";
import DeleteTypography from "../../../components/DeleteTypography";
import MainCard from "../../../components/MainCard";
import { numberOfLines } from "../../../utils/maxLinesNumber";
import { create } from "zustand";
import { useGetExercises } from "../../../api/exercise";
import LoadingDataError from "../../../components/LoadingDataError";
import FileImagePicker from "../../../components/FileImagePicker";

interface CreateWorkoutStore {
  exercises: ExerciseSelected[];

  addExercise: (exercise: ExerciseSelected) => void;

  removeExercise: (exerciseId: number) => void;

  reset: () => void;

  setExer: (exercises: ExerciseSelected[]) => void;
}

export const useCreateWorkout = create<CreateWorkoutStore>((set, get) => ({
  exercises: [],
  addExercise: (exerciseSelected) => {
    const currentExercises = get().exercises;
    const newExercises = [...currentExercises, exerciseSelected];
    set({ exercises: newExercises });
  },
  removeExercise: (exerciseId) => {
    const currentExercises = get().exercises;
    const removed = currentExercises.filter(
      (ele) => ele.exercise_id !== exerciseId
    );
    set({ exercises: removed });
  },
  reset: () => {
    set({ exercises: [] });
  },

  setExer: (exer) => {
    set({ exercises: exer });
  },
}));

interface WorkoutFormValues {
  title: string; //done
  description: string; //done
  type: "group" | "personalized"; //done
  difficulty_level: string; //done
  calories_burned: number; //done
  duration: number; //done
  // coach: number | null;
  // user: number | null;
  user_id?: string | null;
  package_id?: string | null;
  exercises: ExerciseSelected[] | null;
  image: null | string | File;
}

export interface ExerciseSelected {
  exercise_id: number;
  sets?: number;
  reps?: number;
  duration?: number;
  name?: string;
  exerciseType?: "duration" | "sets";
}

interface WorkoutFormProps {
  task?: "update" | "create";
}

export const ExerciseSelectedCard = ({
  exercise,
}: {
  exercise: ExerciseSelected;
}) => {
  const { removeExercise } = useCreateWorkout();

  return (
    <MainCard sx={{ p: 1 }}>
      <Typography
        sx={{
          ...numberOfLines(1),
        }}
      >
        {exercise.name}
      </Typography>
      <Typography variant="subtitle1" color="grey.500" mt={1}>
        Exercise Type : {exercise.exerciseType}
      </Typography>
      {exercise.exerciseType === "duration" ? (
        <Typography>duration : {exercise.duration}</Typography>
      ) : (
        <>
          <Typography>Sets : {exercise.sets}</Typography>
          <Typography>Reps : {exercise.reps}</Typography>
        </>
      )}
      <Button
        color="error"
        variant="outlined"
        onClick={() => {
          removeExercise(exercise.exercise_id);
        }}
      >
        Remove
      </Button>
    </MainCard>
  );
};

const ExerciseRow: React.FC<ListChildComponentProps<Exercise[]>> = memo(
  ({ index, style, data }) => {
    const [exerciseType, setExerciseType] = useState<"duration" | "sets">(
      "duration"
    );
    const { addExercise } = useCreateWorkout();
    const {
      values,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      resetForm,
      setFieldValue,
      submitForm,
    } = useFormik<ExerciseSelected>({
      initialValues: {
        reps: 0,
        sets: 0,
        duration: 0,
        exercise_id: data[index].id!,
      },
      onSubmit: (values) => {
        addExercise({ ...values, name: data[index].name!, exerciseType });
        handleClose();
      },
    });

    useEffect(() => {
      if (exerciseType === "sets") {
        setFieldValue("duration", 0);
      } else {
        setFieldValue("sets", 0);
        setFieldValue("reps", 0);
      }
    }, [exerciseType, setFieldValue]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      resetForm();
    };
    return (
      <>
        <div
          style={{
            ...style,
            width: "300px",
          }}
          key={index}
          onClick={handleOpen}
        >
          <ExcerciseCard
            // withBorder={isActive}
            noActions={true}
            exercise={data[index]}
          />
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              add new exercise by define its set and reps , or duration
            </DialogContentText>

            <Stack flexDirection={"row"} width={"100%"} my={2}>
              <Button
                sx={{ flex: 1, flexShrink: 0, borderRadius: 0 }}
                variant={exerciseType === "duration" ? "contained" : "outlined"}
                onClick={() => setExerciseType("duration")}
              >
                Duration
              </Button>
              <Button
                sx={{ flex: 1, flexShrink: 0, borderRadius: 0 }}
                variant={exerciseType === "sets" ? "contained" : "outlined"}
                onClick={() => setExerciseType("sets")}
              >
                Sets
              </Button>
            </Stack>
            <form onSubmit={handleSubmit}>
              {exerciseType === "duration" ? (
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
              ) : (
                <>
                  <FormControl error={!!touched.sets && !!errors.sets}>
                    <InputLabel>Sets</InputLabel>
                    <OutlinedInput
                      label={"Sets"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.sets}
                      name="sets"
                      type="number"
                    />
                    {!!touched.sets && !!errors.sets && (
                      <FormHelperText error>{errors.sets}</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl error={!!touched.reps && !!errors.reps}>
                    <InputLabel>Reps</InputLabel>
                    <OutlinedInput
                      label={"Reps"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.reps}
                      name="reps"
                      type="number"
                    />
                    {!!touched.reps && !!errors.reps && (
                      <FormHelperText error>{errors.reps}</FormHelperText>
                    )}
                  </FormControl>
                </>
              )}
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="error">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                submitForm();
              }}
            >
              Add Exercise
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  areEqual
);

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
  } = useFormik({
    ...formikProps,
  });

  const { exercises, reset } = useCreateWorkout();
  const [inputSearch, setInputSearch] = useState<string>("");

  const workoutImg = useMemo(() => {
    return (
      values.image && (
        <img
          src={
            typeof values.image === "string"
              ? values.image
              : URL.createObjectURL(values.image as unknown as MediaSource)
          }
          alt="exercise "
          style={{
            width: "150px",
            height: "100%",
            borderRadius: "6px",
            maxHeight: "150px",
            objectFit: "contain",
            maxWidth: "100%",
          }}
        />
      )
    );
  }, [values.image]);

  const exercisesRemoteData = useGetExercises();

  useEffect(() => {
    setFieldValue("exercises", exercises);
  }, [exercises, setFieldValue]);

  useEffect(() => {
    if (exercises.length > 0) {
      reset();
    }
  }, []);

  if (exercisesRemoteData.isLoading) {
    return <Typography>Loading ...</Typography>;
  }

  if (exercisesRemoteData.isError) {
    return <LoadingDataError refetch={exercisesRemoteData.refetch} />;
  }

  let allExercises = exercisesRemoteData?.data?.data?.filter((exer) =>
    exer.name.toLowerCase().includes(inputSearch.toLowerCase())
  )!;

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
              <Grid size={{ xs: 12 }}>
                <FormControl
                  error={!!touched.calories_burned && !!errors.calories_burned}
                >
                  <InputLabel>Calories Burned</InputLabel>
                  <OutlinedInput
                    label={"Calories Burned"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.calories_burned}
                    name="calories_burned"
                    type="number"
                  />
                  {!!touched.calories_burned && !!errors.calories_burned && (
                    <FormHelperText error>
                      {errors.calories_burned}
                    </FormHelperText>
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
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={1}>
                <Grid size={"grow"} sx={{ transition: "width 0.3s" }}>
                  <FileImagePicker
                    title="Workout Image"
                    onSelectImage={(files) => {
                      setFieldValue("image", files?.[0]);
                    }}
                    name="image"
                    accept="image/png,image/jpg,image/jpeg"
                    id="image"
                    onBlur={handleBlur}
                    renderContent={() => {
                      return (
                        <Box sx={{ mt: 2 }}>
                          <Typography textAlign={"center"} color="primary.main">
                            availabile types : JPG , PNG , JPEG
                          </Typography>
                        </Box>
                      );
                    }}
                  />
                </Grid>
                <Grid size={"auto"}>{values.image && workoutImg}</Grid>
              </Grid>
            </Grid>
            {touched.image && errors.image && (
              <FormHelperText error>{errors.image}</FormHelperText>
            )}
          </Grid>
          <Grid size={12}>
            <Box>
              <Typography variant="h4" mb={2}>
                {exercises.length + " "} exercises selected to be in this
                workout
              </Typography>
              {/* <Typography variant="h4" mb={2}>
                Estimated duration for all selected exercises is{" "}
                {exercises.reduce((cur, pre) => {
                  return cur + pre.duration!;
                }, 0)}{" "}
                Minutes
              </Typography> */}
              {exercises.length === 0 && (
                <Typography sx={{ color: "grey.600" }}>
                  No Exercises Selected
                </Typography>
              )}
              {exercises.length !== 0 && (
                <Stack flexDirection={"row"} gap={2} flexWrap={"wrap"}>
                  {exercises.map((exerSele) => (
                    <ExerciseSelectedCard exercise={exerSele} />
                  ))}
                </Stack>
              )}
              <FormControl margin="normal" sx={{ maxWidth: "375px" }}>
                <InputLabel>Seacrh</InputLabel>
                <OutlinedInput
                  label="Search"
                  value={inputSearch}
                  onChange={(e) => {
                    setInputSearch(e.target.value);
                  }}
                  type="search"
                />
              </FormControl>
              <List
                itemCount={allExercises.length}
                itemSize={310}
                height={380}
                width={1000}
                itemData={allExercises || []}
                layout="horizontal"
                style={{
                  width: "100%",
                }}
              >
                {ExerciseRow}
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
