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
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";
import { LoadingButton } from "@mui/lab";

interface ExerciseFormProps {
  task: "create" | "update";
  progress?: number;
}

interface ExerciseFormValues {
  name: string;
  description: string;
  duration: number;
  image: null | string | File;
  target_muscles_image: null | string | File;
  video: null | string | File;
}

const ExerciseForm = ({
  task,
  loadingButtonProps,
  progress,
  ...formikProps
}: FormikConfig<ExerciseFormValues> &
  ExerciseFormProps &
  FormLoadingButtonProps) => {
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
      values.video && (
        <ReactPlayer
          controls
          width={"100%"}
          height={400}
          url={
            typeof values.video === "string"
              ? values.video
              : URL.createObjectURL(values.video as unknown as MediaSource)
          }
        />
      )
    );
  }, [values.video]);

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
            <Grid size={"auto"}>{values.image && exerciseImg}</Grid>
          </Grid>
          {touched.image && errors.image && (
            <FormHelperText error>{errors.image}</FormHelperText>
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
                  setFieldValue("video", files?.[0]);
                }}
                accept="video/mp4"
                name="video"
                id="video"
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
              {values.video && exerciseVideo}
            </Grid>
          </Grid>
          {touched.video && errors.video && (
            <FormHelperText error>{errors.video}</FormHelperText>
          )}
        </Grid>
      </Grid>
      <Box my={2}>
        <LoadingButton
          type="submit"
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
          variant="contained"
          color="primary"
          {...loadingButtonProps}
        >
          {task}
        </LoadingButton>
        {loadingButtonProps?.loading && (
          <Typography>
            please wait , creating ... <b>{progress}%</b>
          </Typography>
        )}
      </Box>
    </form>
  );
};

export default ExerciseForm;
