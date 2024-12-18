import { FormikConfig, useFormik } from "formik";
import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import { gridSpacing } from "../../../config";
import { LoadingButton } from "@mui/lab";
import Grid from "@mui/material/Grid2";
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";

interface PackageFormProps {
  task?: "create" | "update";
}

interface PackageFormValues {
  name: string;
  description: string;
  type: "group" | "personalized";
}

const PackageForm = ({
  task = "create",
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<PackageFormValues> &
  PackageFormProps &
  FormLoadingButtonProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik({ validateOnMount: true, ...formikConfig });
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <FormControl error={!!touched.name && !!errors.name}>
              <InputLabel>Package Name</InputLabel>
              <OutlinedInput
                type="text"
                name="name"
                label="Package Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {!!touched.name && !!errors.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormControl error={!!touched.description && !!errors.description}>
              <InputLabel>Package Description</InputLabel>
              <OutlinedInput
                type="text"
                name="description"
                label="Package Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {!!touched.description && !!errors.description && (
                <FormHelperText error>{errors.description}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <FormControl error={!!touched.type && !!errors.type}>
              <FormLabel>Package Type</FormLabel>
              <RadioGroup
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                row
              >
                <FormControlLabel
                  value="group"
                  control={<Radio />}
                  label="Group"
                />
                <FormControlLabel
                  value="personalized"
                  control={<Radio />}
                  label="Personalized"
                />
              </RadioGroup>
              {!!touched.type && !!errors.type && (
                <FormHelperText error>{errors.type}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <LoadingButton
          type="submit"
          variant="contained"
          disabled={!isValid}
          {...loadingButtonProps}
        >
          {task}
        </LoadingButton>
      </form>
    </Box>
  );
};

export default PackageForm;
