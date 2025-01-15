import { FormikConfig, useFormik } from "formik";
import React, { useEffect } from "react";
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";
import Grid from "@mui/material/Grid2";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { gridSpacing } from "../../../config";

export interface DeliveryTimeValue {
  id?: number;
  title: string;
}

interface DeliveryTimeFormProps {
  task?: "create" | "update";
}

const DeliveryTimeForm = ({
  task = "create",
  initialValues,
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<DeliveryTimeValue> &
  DeliveryTimeFormProps &
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
            <InputLabel>Delivery Time</InputLabel>
            <OutlinedInput
              name="title"
              label={"Delivery Time"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              type="text"
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

export default DeliveryTimeForm;
