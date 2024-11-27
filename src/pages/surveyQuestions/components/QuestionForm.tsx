import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React, { useMemo } from "react";
import FileImagePicker from "../../../components/FileImagePicker";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { LoadingButton } from "@mui/lab";

interface QuestionFormValues {
  question: string;
  question_image: null | string | File;
}

const QuestionForm = ({
  task = "create",
  ...formikConfig
}: FormikConfig<QuestionFormValues> & { task?: "create" | "update" }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    ...formikConfig,
  });

  const memoziedQuestionImage = useMemo(() => {
    return (
      values.question_image && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            alt="new question"
            src={
              typeof values.question_image === "string"
                ? values.question_image
                : URL.createObjectURL(
                    values.question_image as unknown as MediaSource
                  )
            }
            style={{
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      )
    );
  }, [values.question_image]);
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing} alignItems={"stretch"}>
          <Grid size={"grow"}>
            <FileImagePicker
              title="Question Image"
              containerProps={{
                sx: {
                  height: "100%",
                },
              }}
              onSelectImage={(files) => {
                setFieldValue("question_image", files?.[0]);
              }}
              name="question_image"
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
            {touched.question_image && errors.question_image && (
              <FormHelperText error>{errors.question_image}</FormHelperText>
            )}
          </Grid>
          <Grid
            size={"auto"}
            sx={{ maxWidth: "200px", maxHeight: "200px", overflowY: "auto" }}
          >
            {memoziedQuestionImage}
          </Grid>
        </Grid>

        <FormControl
          fullWidth
          error={Boolean(touched.question && errors.question)}
        >
          <InputLabel htmlFor="name">Question</InputLabel>
          <OutlinedInput
            id="question"
            name="question"
            value={values.question}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Question"
            type="text"
          />
          {touched.question && errors.question && (
            <FormHelperText error>{errors.question}</FormHelperText>
          )}
        </FormControl>
        <LoadingButton fullWidth type="submit" variant="outlined">
          {task} Question
        </LoadingButton>
      </form>
    </Box>
  );
};

export default QuestionForm;
