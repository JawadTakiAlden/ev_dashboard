import { Box, Typography } from "@mui/material";
import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import { Exercise } from "../../../tables-def/excercise";
import * as Yup from "yup";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import { useDeleteExercise, useUpdateExercise } from "../../../api/exercise";

const SettingsPannel = ({ exercise }: { exercise: Exercise }) => {
  const deleteExercise = useDeleteExercise();
  const { updateExercice, progress } = useUpdateExercise();
  return (
    <Box>
      <Box id={"update-exercise"}>
        <ExerciseForm
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
            updateExercice.mutate(exerciseFormData);
          }}
          task="update"
          loadingButtonProps={{
            loading: updateExercice.isPending,
          }}
          progress={progress}
          initialValues={{
            name: exercise.name,
            description: exercise.description!,
            // duration: exercise.duration!,
            images: exercise.image_urls as string[],
            target_muscles_image: exercise.target_muscles_image as string,
            video: exercise.video_url as string,
            notes: exercise.notes,
          }}
        />
      </Box>
      <Box id="delete-exercise">
        <DeleteTypography mb={2}>Delete Exercise</DeleteTypography>

        <Typography mb={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem
          quod enim minima nostrum dolorem doloremque libero dolor quidem ipsam,
          eaque soluta ex nobis! Itaque excepturi blanditiis ab quasi
          temporibus.
        </Typography>

        <DoupleClickToConfirm
          color="error"
          loading={deleteExercise.isPending}
          onClick={() => {
            deleteExercise.mutate();
          }}
        >
          Delete
        </DoupleClickToConfirm>
      </Box>
    </Box>
  );
};

export default SettingsPannel;

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
  image_url: Yup.mixed().required().label("Image"),
  target_muscles_image: Yup.mixed().required().label("Target muscles image"),
  video_url: Yup.mixed().required().label("Exercise Video"),
});
