import React, { useMemo } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { FormikConfig, useFormik } from "formik";
import FileImagePicker from "../../../components/FileImagePicker";
import ReactPlayer from "react-player";

interface ExerciseFormProps {
  task: "create" | "update";
}

interface ExerciseFormValues {
  name: string;
  description: string;
  duration: number;
  image_url: null | string | File;
  target_muscles_image: null | string | File;
  video_url: null | string | File;
}

const ExerciseForm = ({
  task,
  ...formikProps
}: FormikConfig<ExerciseFormValues> & ExerciseFormProps) => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik<ExerciseFormValues>({
    ...formikProps,
  });

  const exerciseImg = useMemo(() => {
    return (
      values.image_url && (
        <img
          src={
            typeof values.image_url === "string"
              ? values.image_url
              : URL.createObjectURL(values.image_url as unknown as MediaSource)
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
  }, [values.image_url]);

  const targetImage = useMemo(() => {
    return (
      values.target_muscles_image && (
        <img
          src={
            typeof values.target_muscles_image === "string"
              ? values.target_muscles_image
              : URL.createObjectURL(
                  values.target_muscles_image as unknown as MediaSource
                )
          }
          alt="target muscles"
          style={{
            width: "150px",
            height: "100%",
            maxHeight: "150px",
            borderRadius: "6px",
            objectFit: "contain",
            maxWidth: "100%",
          }}
        />
      )
    );
  }, [values.target_muscles_image]);

  const exerciseVideo = useMemo(() => {
    return (
      values.video_url && (
        <ReactPlayer
          controls
          width={"100%"}
          height={400}
          url={
            typeof values.video_url === "string"
              ? values.video_url
              : URL.createObjectURL(values.video_url as unknown as MediaSource)
          }
        />
      )
    );
  }, [values.video_url]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={gridSpacing}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth error={Boolean(touched.name && errors.name)}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Name"
            />
            {touched.name && errors.name && (
              <FormHelperText>{errors.name}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl
            fullWidth
            error={Boolean(touched.duration && errors.duration)}
          >
            <InputLabel htmlFor="duration">Duration (minutes)</InputLabel>
            <OutlinedInput
              id="duration"
              name="duration"
              type="number"
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Duration"
            />
            {touched.duration && errors.duration && (
              <FormHelperText>{errors.duration}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl
            fullWidth
            error={Boolean(touched.description && errors.description)}
          >
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Description"
              multiline
              rows={5}
            />
            {touched.description && errors.description && (
              <FormHelperText>{errors.description}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} />
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={1}>
            <Grid size={"grow"} sx={{ transition: "width 0.3s" }}>
              <FileImagePicker
                title="Exercise Image"
                onSelectImage={(files) => {
                  setFieldValue("image_url", files?.[0]);
                }}
                name="image_url"
                accept="image/png,image/jpg,image/jpeg"
                id="image_url"
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
            <Grid size={"auto"}>{values.image_url && exerciseImg}</Grid>
          </Grid>
          {touched.image_url && errors.image_url && (
            <FormHelperText error>{errors.image_url}</FormHelperText>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={1}>
            <Grid size={"grow"} sx={{ transition: "width 0.3s" }}>
              <FileImagePicker
                title="Target Muscles Image"
                onSelectImage={(files) => {
                  setFieldValue("target_muscles_image", files?.[0]);
                }}
                accept="image/png,image/jpg,image/jpeg"
                name="target_muscles_image"
                id="target_muscles_image"
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
            <Grid size={"auto"}>{targetImage}</Grid>
          </Grid>
          {touched.target_muscles_image && errors.target_muscles_image && (
            <FormHelperText error>{errors.target_muscles_image}</FormHelperText>
          )}
        </Grid>
        <Grid size={12}>
          <Grid container spacing={1}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FileImagePicker
                containerProps={{
                  sx: {
                    height: "100%",
                  },
                }}
                title="Exercise Video"
                onSelectImage={(files) => {
                  setFieldValue("video_url", files?.[0]);
                }}
                accept="video/mp4"
                name="video_url"
                id="video_url"
                onBlur={handleBlur}
                renderContent={() => {
                  return (
                    <Box sx={{ mt: 2 }}>
                      <Typography textAlign={"center"} color="primary.main">
                        availabile types : MP4
                      </Typography>
                    </Box>
                  );
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {values.video_url && exerciseVideo}
            </Grid>
          </Grid>
          {touched.video_url && errors.video_url && (
            <FormHelperText error>{errors.video_url}</FormHelperText>
          )}
        </Grid>
      </Grid>
      <Box my={2}>
        <Button
          type="submit"
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
          variant="contained"
          color="primary"
        >
          {task}
        </Button>
      </Box>
    </form>
  );
};

export default ExerciseForm;
