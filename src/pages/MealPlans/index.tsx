import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { gridSpacing } from "../../config";
import MealPlanCard from "./components/MealPlanCard";
import { Link } from "react-router-dom";
import { useGetMealPlan } from "../../api/mealPlan";
import LoadingDataError from "../../components/LoadingDataError";

const MealPlans = () => {
  const mealPlans = useGetMealPlan();

  if (mealPlans.isLoading) {
    return <Skeleton width={250} height={150} animation="wave" />;
  }
  if (mealPlans.isError) {
    return <LoadingDataError refetch={mealPlans.refetch} />;
  }
  return (
    <Box>
      <Button
        component={Link}
        to="create-meal-plan"
        variant="contained"
        sx={{ mb: 2 }}
      >
        Create meal plan
      </Button>
      {mealPlans.data?.data.length === 0 && (
        <Typography
          sx={{
            textTransform: "capitalize",
          }}
        >
          no meal plans yet
        </Typography>
      )}
      <Grid container spacing={gridSpacing}>
        {mealPlans.data?.data.map((plan, i) => {
          return (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <MealPlanCard plan={plan} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MealPlans;
