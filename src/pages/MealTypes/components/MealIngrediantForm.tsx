import { FormikConfig, useFormik } from "formik";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

export interface MealIngrediantVlaue {
  id?: number;
  title: string;
}

interface MealIngrediantFormProps {
  task?: "create" | "update";
}

const MealIngrediantForm = ({
  task = "create",
  initialValues,
  ...formikConfig
}: FormikConfig<MealIngrediantVlaue> & MealIngrediantFormProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    setValues,
  } = useFormik({
    initialValues,
    validateOnMount: true,
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
            <InputLabel>Ingrediant Title</InputLabel>
            <OutlinedInput
              name="title"
              label={"Ingrediant Title"}
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
            disabled={!isValid}
            sx={{ width: { xs: "100%", sm: "initial" } }}
          >
            {task}
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default MealIngrediantForm;
