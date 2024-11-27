import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React, { useMemo } from "react";
import { gridSpacing } from "../../../config";
import Grid from "@mui/material/Grid2";
import { MealType, mealTypes } from "../../../tables-def/meal-types";
import FileImagePicker from "../../../components/FileImagePicker";
import { LoadingButton } from "@mui/lab";

interface MealPlanFormVlaues {
  title: string;
  calories: number | undefined;
  image: string | null | File;
  price_monthly: undefined | number;
  meal_types: MealType[];
}

interface MealPlanFormProps {
  task?: "create" | "update";
}

const MealPlanForm = ({
  task = "create",
  ...formikConfig
}: FormikConfig<MealPlanFormVlaues> & MealPlanFormProps) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    ...formikConfig,
  });

  const memoziedImage = useMemo(() => {
    return (
      values.image && (
        <img
          src={
            typeof values.image === "string"
              ? values.image
              : URL.createObjectURL(values.image as unknown as MediaSource)
          }
          alt="meal plan "
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
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              minWidth: "300px",
            }}
          >
            <FormControl error={!!touched.title && !!errors.title}>
              <InputLabel>Title</InputLabel>
              <OutlinedInput
                name="title"
                label="Title"
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.title && !!errors.title && (
                <FormHelperText error>{errors.title}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              minWidth: "300px",
            }}
          >
            <FormControl error={!!touched.calories && !!errors.calories}>
              <InputLabel>Calories</InputLabel>
              <OutlinedInput
                name="calories"
                label="Calories"
                type="number"
                value={values.calories}
                onChange={handleChange}
                inputProps={{
                  min: 0,
                }}
                onBlur={handleBlur}
              />
              {!!touched.calories && !!errors.calories && (
                <FormHelperText error>{errors.calories}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              minWidth: "300px",
            }}
          >
            <Grid container spacing={0}>
              <Grid
                size={12}
                sx={{
                  minWidth: "300px",
                }}
              >
                <FormControl
                  error={!!touched.price_monthly && !!errors.price_monthly}
                >
                  <InputLabel>Price in month</InputLabel>
                  <OutlinedInput
                    name="price_monthly"
                    label="Price in month"
                    type="number"
                    value={values.price_monthly}
                    onChange={handleChange}
                    inputProps={{
                      min: 0,
                    }}
                    onBlur={handleBlur}
                  />
                  {!!touched.price_monthly && !!errors.price_monthly && (
                    <FormHelperText error>
                      {errors.price_monthly}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid
                size={12}
                sx={{
                  minWidth: "300px",
                }}
              >
                <FormControl
                  error={!!touched.meal_types && !!errors.meal_types}
                >
                  <Autocomplete
                    multiple
                    id="meal_types"
                    disableCloseOnSelect
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.title}
                    onChange={(e, newVlaue) => {
                      setFieldValue("meal_types", newVlaue);
                      console.log(newVlaue);
                    }}
                    value={values.meal_types}
                    getOptionKey={(option) => option.id}
                    options={mealTypes}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Meal type"
                        placeholder="meal types"
                      />
                    )}
                  />
                  {/* {!!touched.meal_types && !!errors.meal_types && (
                    <FormHelperText error>{errors.meal_types}</FormHelperText>
                  )} */}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Grid container columnSpacing={2}>
              <Grid size="grow">
                <FileImagePicker
                  title="Meal Plan Image"
                  onSelectImage={(files) => {
                    setFieldValue("image", files?.[0]);
                  }}
                  name="image"
                  accept="image/png,image/jpg,image/jpeg"
                  id="image"
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
              <Grid size="auto">{memoziedImage}</Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <LoadingButton
              type="submit"
              variant="outlined"
              sx={{ width: { xs: "100%", sm: "initial" } }}
            >
              {task} plan
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MealPlanForm;
