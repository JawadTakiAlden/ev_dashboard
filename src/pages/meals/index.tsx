import {
  Box,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import MealCard from "./components/MealCard";
import JustInViewRender from "../../components/JustInViewRender";
import CreateMeal from "./createMeal/createMeal";
import { useGetMeals } from "../../api/meals";
import LoadingDataError from "../../components/LoadingDataError";
import MainCard from "../../components/MainCard";
import { Meal } from "../../tables-def/meals";

const Meals = () => {
  const meals = useGetMeals();

  if (meals.isError) {
    return <LoadingDataError refetch={meals.refetch} />;
  }

  if (meals.isLoading) {
    <MainCard border={false} cardContent={false}>
      <CardHeader>
        <Skeleton width={120} height={10} />
      </CardHeader>
      <CardMedia>
        <Skeleton width={250} height={190} />
      </CardMedia>
      <CardContent>
        <Skeleton width={120} sx={{ mb: 2 }} height={10} />
        <Skeleton width={160} height={10} />
        <Skeleton width={120} height={10} />
      </CardContent>
    </MainCard>;
  }

  return (
    <Box>
      <CreateMeal />
      <Grid container spacing={gridSpacing} alignItems={"stretch"}>
        {meals?.data?.data.map((meal: Meal, i: number) => (
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
