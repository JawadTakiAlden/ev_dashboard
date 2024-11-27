import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import { meals } from "../../tables-def/meals";
import MealCard from "./components/MealCard";
import JustInViewRender from "../../components/JustInViewRender";
import CreateMeal from "./createMeal/createMeal";

const Meals = () => {
  return (
    <Box>
      <CreateMeal />
      <Grid container spacing={gridSpacing} alignItems={"stretch"}>
        {meals.map((meal, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <JustInViewRender>
              <MealCard meal={meal} />
            </JustInViewRender>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Meals;
