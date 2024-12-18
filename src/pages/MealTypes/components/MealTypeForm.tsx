import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";

export interface MealTypeVlaue {
  id?: number;
  title: string;
}

interface MealTypeFormProps {
  task?: "create" | "update";
}

const MealTypeForm = ({
  task = "create",
  initialValues,
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<MealTypeVlaue> &
  MealTypeFormProps &
  FormLoadingButtonProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    ...formikConfig,
  });

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues, setValues]);
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <FormControl error={!!errors.title && !!touched.title}>
            <InputLabel>Meal type title</InputLabel>
            <OutlinedInput
              name="title"
              label={"Meal type title"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              type="tyext"
            />
            {!!errors.title && !!touched.title && (
              <FormHelperText error>{errors.title}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <LoadingButton
            variant="outlined"
            type="submit"
            disabled={!values.title}
            sx={{ width: { xs: "100%", sm: "initial" } }}
            {...loadingButtonProps}
          >
            {task}
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default MealTypeForm;
