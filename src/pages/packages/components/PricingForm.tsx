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

interface PriceFormProps {
  task?: "create" | "update";
  dir?: "row" | "column";
}

export interface PriceFormValue {
  title: string;
  price: number;
  numberOfDays: number;
}

const PricingForm = ({
  task = "create",
  dir = "row",
  ...formikConfig
}: FormikConfig<PriceFormValue> & PriceFormProps) => {
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
            <InputLabel>Price Title</InputLabel>
            <OutlinedInput
              name="title"
              label="Price Title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!!touched.title && !!errors.title && (
              <FormHelperText error>{errors.title}</FormHelperText>
            )}
          </FormControl>
          <FormControl error={!!touched.price && !!errors.price}>
            <InputLabel>Price</InputLabel>
            <OutlinedInput
              name="price"
              label="price"
              type="number"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!!touched.price && !!errors.price && (
              <FormHelperText error>{errors.price}</FormHelperText>
            )}
          </FormControl>
          <FormControl error={!!touched.numberOfDays && !!errors.numberOfDays}>
            <InputLabel>Number of days</InputLabel>
            <OutlinedInput
              name="numberOfDays"
              label="Number of days"
              type="number"
              value={values.numberOfDays}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!!touched.numberOfDays && !!errors.numberOfDays && (
              <FormHelperText error>{errors.numberOfDays}</FormHelperText>
            )}
          </FormControl>
        </Stack>
        <LoadingButton disabled={!isValid} variant="outlined">
          {task}
        </LoadingButton>
      </form>
    </Box>
  );
};

export default PricingForm;
