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

interface PriceFormProps {
  task?: "create" | "update";
  dir?: "row" | "column";
}

export interface PriceFormValue {
  title: string;
  price: number;
  number_of_days: number;
  package_id: number | string;
}

const PricingForm = ({
  task = "create",
  dir = "row",
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<PriceFormValue> & PriceFormProps & FormLoadingButtonProps) => {
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
          <FormControl
            error={!!touched.number_of_days && !!errors.number_of_days}
          >
            <InputLabel>Number of days</InputLabel>
            <OutlinedInput
              name="number_of_days"
              label="Number of days"
              type="number"
              value={values.number_of_days}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!!touched.number_of_days && !!errors.number_of_days && (
              <FormHelperText error>{errors.number_of_days}</FormHelperText>
            )}
          </FormControl>
        </Stack>
        <LoadingButton
          disabled={!isValid}
          variant="outlined"
          type="submit"
          {...loadingButtonProps}
        >
          {task}
        </LoadingButton>
      </form>
    </Box>
  );
};

export default PricingForm;
