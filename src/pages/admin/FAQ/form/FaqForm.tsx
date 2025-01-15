import {
  Box,
  FormHelperText,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React from "react";
import Grid from "@mui/material/Grid2";
import { LoadingButton } from "@mui/lab";
import { FormLoadingButtonProps } from "../../../../tables-def/loadingButtonProps";
import { gridSpacing } from "../../../../config";

interface FAQFormProps {
  task?: "create" | "update";
}

interface FAQFormValues {
  question: string;
  answer: string;
}

const FAQForm = ({
  task = "create",
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<FAQFormValues> & FAQFormProps & FormLoadingButtonProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik({
    validateOnMount: true,
    ...formikConfig,
  });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid size={12}>
            <FormControl
              margin="dense"
              fullWidth
              error={touched.question && Boolean(errors.question)}
            >
              <InputLabel htmlFor="question">FAQ Question</InputLabel>
              <OutlinedInput
                fullWidth
                id="question"
                name="question"
                label="FAQ Question"
                value={values.question}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.question && Boolean(errors.question)}
              />
              {touched.question && Boolean(errors.question) && (
                <FormHelperText>{errors.question}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl
              margin="dense"
              fullWidth
              error={touched.answer && Boolean(errors.answer)}
            >
              <InputLabel htmlFor="answer">FAQ Answer</InputLabel>
              <OutlinedInput
                fullWidth
                id="answer"
                name="answer"
                label="FAQ Answer"
                multiline
                rows={4}
                value={values.answer}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.answer && Boolean(errors.answer)}
              />
              {touched.answer && Boolean(errors.answer) && (
                <FormHelperText>{errors.answer}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={12}>
            <LoadingButton
              fullWidth
              variant="outlined"
              type="submit"
              disabled={!isValid}
              sx={{
                width: { xs: "100%", sm: "fit-content" },
              }}
              {...loadingButtonProps}
            >
              {task === "create" ? "Create FAQ" : "Update FAQ"}
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FAQForm;
