import { FormikConfig, useFormik } from "formik";
import React, { useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FileImagePicker from "../../../components/FileImagePicker";

export interface MealIngrediantVlaue {
  id?: number;
  title: string;
  image: File | null | string;
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
    setFieldValue,
  } = useFormik({
    initialValues,
    validateOnMount: true,
    ...formikConfig,
  });

  const mealImages = useMemo(() => {
    return (
      values.image && (
        <img
          src={
            typeof values.image === "string"
              ? values.image
              : URL.createObjectURL(values.image as unknown as MediaSource)
          }
          alt={values.title}
          style={{
            width: "150px",
            height: "100%",
            borderRadius: "6px",
            maxHeight: "150px",
            objectFit: "contain",
            maxWidth: "100%",
          }}
        />
      )
    );
  }, [values.image]);

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
          <Grid container columnSpacing={gridSpacing}>
            <Grid size={"auto"}>{mealImages}</Grid>
            <Grid size={"grow"}>
              <FileImagePicker
                title="Meal Ingredient Image"
                onSelectImage={(files) => {
                  if (files !== null && files.length > 0) {
                    setFieldValue("image", files?.[0]);
                  }
                }}
                name="images"
                accept="image/png,image/jpg,image/jpeg"
                id="images"
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
            </Grid>
          </Grid>
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
