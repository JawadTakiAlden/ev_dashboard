import React from "react";
import { FormLoadingButtonProps } from "../../../../tables-def/loadingButtonProps";
import { FormikConfig, useFormik } from "formik";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface SportFormProps {
  task?: "create" | "update";
}

interface SportFormVlaues {
  title: string;
}
const SportForm = ({
  task = "create",
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<SportFormVlaues> & SportFormProps & FormLoadingButtonProps) => {
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
        <FormControl
          margin="dense"
          fullWidth
          error={touched.title && Boolean(errors.title)}
        >
          <InputLabel>Title</InputLabel>
          <OutlinedInput
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
          />
          {touched.title && Boolean(errors.title) && (
            <FormHelperText>{errors.title}</FormHelperText>
          )}
        </FormControl>

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
          {task}
        </LoadingButton>
      </form>
    </Box>
  );
};

export default SportForm;
