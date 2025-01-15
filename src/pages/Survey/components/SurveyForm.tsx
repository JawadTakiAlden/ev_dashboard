import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React from "react";
import { gridSpacing } from "../../../config";
import { LoadingButton } from "@mui/lab";
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";

interface SurveyFormProps {
  task?: "create" | "update";
  dir?: "row" | "column";
}

export interface SurveyFormValue {
  title: string;
  package_id?: number;
}

const SurveyForm = ({
  task = "create",
  dir = "row",
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<SurveyFormValue> &
  SurveyFormProps &
  FormLoadingButtonProps) => {
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
    <Box sx={{ minWidth: "300px" }}>
      <form onSubmit={handleSubmit}>
        <Stack flexDirection={dir} gap={gridSpacing}>
          <FormControl error={!!touched.title && !!errors.title}>
            <InputLabel>Survey Title</InputLabel>
            <OutlinedInput
              name="title"
              label="Survey Title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!!touched.title && !!errors.title && (
              <FormHelperText error>{errors.title}</FormHelperText>
            )}
          </FormControl>
          <LoadingButton
            sx={{ minWidth: "200px" }}
            disabled={!isValid}
            variant="outlined"
            type={"submit"}
            {...loadingButtonProps}
          >
            {task}
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  );
};

export default SurveyForm;
