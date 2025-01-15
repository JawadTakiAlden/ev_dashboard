import * as Yup from "yup";
import { Box } from "@mui/material";
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
          const exerciseFormData = new FormData();
          exerciseFormData.append("name", values.name);
          exerciseFormData.append("description", values.description);
          // exerciseFormData.append("duration", values.duration.toString());
          exerciseFormData.append("notes", JSON.stringify(values.notes));
          exerciseFormData.append(
            "target_muscles_image",
            values.target_muscles_image as Blob
          );
          exerciseFormData.append("video", values.video as Blob);
          values.images.map((image) =>
            exerciseFormData.append("images", image)
          );
          createExercice.mutate(exerciseFormData);
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
  images: [],
  target_muscles_image: null,
  video: null,
  notes: [],
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(255, "Name must be at most 255 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "Description must be at most 1000 characters"),
  // duration: Yup.number()
  //   .nullable()
  //   .positive("Duration must be a positive number")
  //   .integer("Duration must be an integer"),
  images: Yup.array().required().label("Image"),
  target_muscles_image: Yup.mixed().required().label("Target muscles image"),
  notes: Yup.array().required().label("Notes"),
  video: Yup.mixed().required().label("Exercise Video"),
});
