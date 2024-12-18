import { alpha, Box } from "@mui/material";
import React from "react";
import DeleteTypography from "../../../components/DeleteTypography";
import MealPlanForm from "../components/MealPlanForm";
import { useCreateMealPlan } from "../../../api/mealPlan";

const CreateMealPlan = () => {
  const createMealPlan = useCreateMealPlan();
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
          createMealPlan.mutateAsync({
            ...values,
            types: values.types.map((ty) => ty.id),
          });
        }}
        loadingButtonProps={{
          loading: createMealPlan.isPending,
        }}
        initialValues={{
          title: "",
          calories: 0,
          image: null,
          types: [],
          price_monthly: undefined,
        }}
      />
    </Box>
  );
};

export default CreateMealPlan;
