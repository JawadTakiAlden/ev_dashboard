import React, { useMemo } from "react";
import * as Yup from "yup";
import { FormikConfig, useFormik } from "formik";
import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import useGetTypes from "../../../api/type/useGetTypes";
import { MealType } from "../../../tables-def/meal-types";
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";
import FileImagePicker from "../../../components/FileImagePicker";
import { MealIngreadiant } from "../../../tables-def/meal-ingrediant";
import { useGetIngredients } from "../../../api/ingredients";

// Updated Validation Schema
export const mealValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required.")
    .max(255, "Name cannot exceed 255 characters."),
  description: Yup.string().max(
    500,
    "Description cannot exceed 500 characters."
  ),
  calories: Yup.number().nullable().min(0, "Calories cannot be negative."),
  protein: Yup.number().nullable().min(0, "Protein cannot be negative."),
  carbohydrates: Yup.number()
    .nullable()
    .min(0, "Carbohydrates cannot be negative."),
  fats: Yup.number().nullable().min(0, "Fats cannot be negative."),
  fiber: Yup.number().nullable().min(0, "Fiber cannot be negative."),
  image_url_url: Yup.string()
    .nullable()
    .url("image_url URL must be a valid URL."),
  // can_be_skipped: Yup.boolean(),
  // can_be_modified: Yup.boolean(),
});

interface MealFormValues {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carb: number;
  fats: number;
  fiber: number;
  images: string[] | File[];
  types: MealType[];
  ingredients: MealIngreadiant[];
}

interface ExerciseFormProps {
  task?: "create" | "update";
}

const MealForm = ({
  task = "create",
  loadingButtonProps,
  ...formikProps
}: FormikConfig<MealFormValues> &
  ExerciseFormProps &
  FormLoadingButtonProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    ...formikProps,
  });

  const mealImages = useMemo(() => {
    return (
      values.images?.length > 0 && (
        <Stack flexDirection={"row"} gap={0.5} alignItems={"center"}>
          {values.images?.map((image, i) => {
            return (
              <img
                key={i}
                src={
                  typeof image === "string"
                    ? image
                    : URL.createObjectURL(image as unknown as MediaSource)
                }
                alt="exercise "
                style={{
                  width: "150px",
                  height: "100%",
                  borderRadius: "6px",
                  maxHeight: "150px",
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            );
          })}
        </Stack>
      )
    );
  }, [values.images.length]);

  const mealTypes = useGetTypes();
  const mealIngredients = useGetIngredients();

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid size={12}>
            <FormControl>
              <InputLabel>Meal Name</InputLabel>
              <OutlinedInput
                name="name"
                label="Meal Name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.name && !!errors.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl>
              <InputLabel>Meal Description</InputLabel>
              <OutlinedInput
                name="description"
                label="Meal Description"
                type="text"
                value={values.description}
                multiline
                rows={4}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.description && !!errors.description && (
                <FormHelperText error>{errors.description}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl>
              <InputLabel>Meal Calories</InputLabel>
              <OutlinedInput
                name="calories"
                label="Meal Calories"
                type="number"
                value={values.calories}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.calories && !!errors.calories && (
                <FormHelperText error>{errors.calories}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* Added Inputs for Macros */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl>
              <InputLabel>Protein (g)</InputLabel>
              <OutlinedInput
                name="protein"
                label="Protein"
                type="number"
                value={values.protein}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.protein && !!errors.protein && (
                <FormHelperText error>{errors.protein}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl>
              <InputLabel>Carbohydrates (g)</InputLabel>
              <OutlinedInput
                name="carb"
                label="Carbohydrates"
                type="number"
                value={values.carb}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.carb && !!errors.carb && (
                <FormHelperText error>{errors.carb}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl>
              <InputLabel>Fats (g)</InputLabel>
              <OutlinedInput
                name="fats"
                label="Fats"
                type="number"
                value={values.fats}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.fats && !!errors.fats && (
                <FormHelperText error>{errors.fats}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl>
              <InputLabel>Fiber (g)</InputLabel>
              <OutlinedInput
                name="fiber"
                label="Fiber"
                type="number"
                value={values.fiber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.fiber && !!errors.fiber && (
                <FormHelperText error>{errors.fiber}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            {/* <FormControl error={!!touched.type && !!errors.type}> */}
            <Autocomplete
              multiple
              id="meal_types"
              disableCloseOnSelect
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.title}
              onChange={(e, newVlaue) => {
                setFieldValue("types", newVlaue);
              }}
              value={values.types}
              loading={mealTypes.isLoading}
              getOptionKey={(option) => option.id}
              options={mealTypes?.data?.data || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Meal type"
                  placeholder="meal types"
                />
              )}
            />
            {/* </FormControl> */}
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            {/* <FormControl error={!!touched.type && !!errors.type}> */}
            <Autocomplete
              multiple
              id="ingredients"
              disableCloseOnSelect
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.title}
              onChange={(e, newVlaue) => {
                setFieldValue("ingredients", newVlaue);
              }}
              value={values.ingredients}
              loading={mealIngredients.isLoading}
              getOptionKey={(option) => option.id}
              options={mealIngredients?.data?.data || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Meal Ingredient"
                  placeholder="meal ingredient"
                />
              )}
            />
            {/* </FormControl> */}
          </Grid>
          <Grid size={12}>
            <Grid size={12}>{mealImages}</Grid>
            <Grid container columnSpacing={gridSpacing}>
              <Grid size={"grow"}>
                <FileImagePicker
                  title="Meal Image"
                  onSelectImage={(files) => {
                    if (files !== null && files.length > 0) {
                      setFieldValue("images", [...values.images, files?.[0]]);
                    }
                  }}
                  name="images"
                  accept="images/png,image_url/jpg,image_url/jpeg"
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
              sx={{ my: 1, width: { xs: "100%", sm: "initial" } }}
              variant="outlined"
              type="submit"
              {...loadingButtonProps}
            >
              {task}
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MealForm;
