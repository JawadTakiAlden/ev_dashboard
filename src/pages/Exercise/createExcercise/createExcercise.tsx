import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import ExerciseForm from "../components/ExerciseForm";
import { useCreateExercise } from "../../../api/exercise";

const CreateExcercise = () => {
  const { createExercice, progress } = useCreateExercise();
  return (
    <Box>
      <ExerciseForm
        task="create"
        progress={progress}
        onSubmit={(values) => {
          console.log(values);
          createExercice.mutate(values);
        }}
        loadingButtonProps={{
          loading: createExercice.isPending,
        }}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Box>
  );
};

export default CreateExcercise;

const initialValues = {
  name: "",
  description: "",
  duration: 0,
  image: null,
  target_muscles_image: null,
  video: null,
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(255, "Name must be at most 255 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "Description must be at most 1000 characters"),
  duration: Yup.number()
    .nullable()
    .positive("Duration must be a positive number")
    .integer("Duration must be an integer"),
  image: Yup.mixed().required().label("Image"),
  target_muscles_image: Yup.mixed().required().label("Target muscles image"),
  video: Yup.mixed().required().label("Exercise Video"),
});
