import { alpha, Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import DeleteTypography from "../../components/DeleteTypography";
import MealPlanForm from "./components/MealPlanForm";
import DoupleClickToConfirm from "../../components/DoupleClickToConfirm";
import {
  useDeleteMealPlan,
  useShowMealPlan,
  useUpdateMealPlan,
} from "../../api/mealPlan";
import LoadingDataError from "../../components/LoadingDataError";

const MealPlanDetail = () => {
  const deleteMealPlan = useDeleteMealPlan();
  const meal = useShowMealPlan();
  const updateMealPlan = useUpdateMealPlan();

  if (meal.isLoading) {
    return <Typography>Loading ...</Typography>;
  }

  if (meal.isError) {
    return <LoadingDataError refetch={meal.refetch} />;
  }

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <DeleteTypography
            sx={{
              borderLeftColor: (theme) => alpha(theme.palette.info.main, 0.3),
              mb: 2,
            }}
          >
            Update Meal PLan
          </DeleteTypography>
          <MealPlanForm
            task="update"
            onSubmit={(values) => {
              updateMealPlan.mutate({
                ...values,
                types: values.types.map((type) => type.id),
              });
            }}
            loadingButtonProps={{
              loading: updateMealPlan.isPending,
            }}
            initialValues={meal.data?.data!}
          />
        </Grid>
        <Grid size={12}>
          <Box>
            <DeleteTypography mb={2}>Delete Meal</DeleteTypography>
            <Typography sx={{ maxWidth: "1000px", mb: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              maiores officiis fugiat eaque rerum quae amet ullam ipsa. Quod
              veritatis eum ullam possimus sed, maxime eveniet. Porro, totam
              sequi! Voluptate!
            </Typography>
            <DoupleClickToConfirm
              onClick={() => {
                deleteMealPlan.mutate();
              }}
              loading={deleteMealPlan.isPending}
              color="error"
            >
              delete meal plan
            </DoupleClickToConfirm>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MealPlanDetail;
