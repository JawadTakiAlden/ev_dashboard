import { alpha, Box } from "@mui/material";
import React from "react";
import DeleteTypography from "../../../components/DeleteTypography";
import MealPlanForm from "../components/MealPlanForm";

const CreateMealPlan = () => {
  return (
    <Box>
      <DeleteTypography
        sx={{
          borderLeftColor: (theme) => alpha(theme.palette.info.main, 0.3),
          mb: 2,
        }}
      >
        Create new meal plan
      </DeleteTypography>
      <MealPlanForm
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          title: "",
          calories: 0,
          image: null,
          meal_types: [],
          price_monthly: undefined,
        }}
      />
    </Box>
  );
};

export default CreateMealPlan;
