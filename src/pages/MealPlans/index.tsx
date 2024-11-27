import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";
import { gridSpacing } from "../../config";
import { mealPlans } from "../../tables-def/meal-plans";
import MealPlanCard from "./components/MealPlanCard";
import { Link } from "react-router-dom";

const MealPlans = () => {
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
      <Grid container spacing={gridSpacing}>
        {mealPlans.map((plan, i) => {
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
