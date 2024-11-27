import React from "react";
import { useParams } from "react-router";
import { meals } from "../../../tables-def/meals";
import { alpha, Box, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import MealForm from "../components/MealForm";

const MealDetail = () => {
  const { mealId } = useParams<{ mealId: string }>();
  const searchMeal = meals.filter((meal) => meal.id === +mealId!);
  const meal = searchMeal[0];

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <Stack
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={"center"}
            gap={2}
          >
            <Box
              sx={{
                width: "calc(50px + 5vw)",
                height: "calc(50px + 5vw)",
                borderRadius: "50%",
                boxShadow: (theme) =>
                  `10px 0 0 ${theme.palette.background.paper}`,
                overflow: "hidden",
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
              }}
            >
              <img
                src={meal.image_url}
                alt={meal.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" mb={2}>
                {meal.name}
              </Typography>
              <Typography variant="body1" mb={2}>
                {meal.description}
              </Typography>
              <Typography variant="caption">
                Calories : {meal.calories}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <DeleteTypography
            sx={{
              borderLeftColor: (theme) => alpha(theme.palette.info.main, 0.2),
              mb: 2,
            }}
          >
            Update Meal
          </DeleteTypography>
          <MealForm
            task="update"
            onSubmit={(values) => {
              console.log(values);
            }}
            initialValues={{
              name: "Grilled Chicken Salad",
              description:
                "Fresh greens topped with grilled chicken breast. Fresh greens topped with grilled chicken breast. Fresh greens topped with grilled chicken breast. Fresh greens topped with grilled chicken breast. Fresh greens topped with grilled chicken breast. Fresh greens topped with grilled chicken breast. Fresh greens topped with grilled chicken breast.",
              calories: 250,
              image_url: "https://picsum.photos/seed/chicken_salad/300/200",
              type: "lunch",
              fats: 9,
              fiber: 5,
              carbohydrates: 26,
              protein: 32,
            }}
          />
        </Grid>

        <Grid size={12}>
          <Divider />
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
              color="error"
              onClick={() => {
                console.log("clicked");
              }}
            >
              delete meal
            </DoupleClickToConfirm>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MealDetail;
