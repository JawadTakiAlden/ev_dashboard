import * as Yup from "yup";
import { Box } from "@mui/material";
import ExerciseForm from "../components/ExerciseForm";

const CreateExcercise = () => {
  return (
    <Box>
      <ExerciseForm
        task="create"
        onSubmit={(values) => {
          console.log(values);
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
  image_url: null,
  target_muscles_image: null,
  video_url: null,
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
  image_url: Yup.mixed().required().label("Image"),
  target_muscles_image: Yup.mixed().required().label("Target muscles image"),
  video_url: Yup.mixed().required().label("Exercise Video"),
});
