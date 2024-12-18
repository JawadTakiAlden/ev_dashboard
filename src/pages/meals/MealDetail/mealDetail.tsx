import React from "react";
import {
  alpha,
  Box,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import MealForm from "../components/MealForm";
import { useDeleteMeal, useShowMeal, useUpdateMeal } from "../../../api/meals";
import LoadingDataError from "../../../components/LoadingDataError";

const MealDetail = () => {
  const meal = useShowMeal();
  const deleteMeal = useDeleteMeal();
  const updateMeal = useUpdateMeal();
  if (meal.isError) {
    return <LoadingDataError refetch={meal.refetch} />;
  }

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
              {meal.isLoading && (
                <Skeleton
                  width={"100%"}
                  height={"100%"}
                  variant="rectangular"
                />
              )}
              {!meal.isLoading && (
                <img
                  src={meal.data?.data.image_url}
                  alt={meal.data?.data.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              )}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" mb={2}>
                {meal.isLoading ? (
                  <Skeleton width={100} height={20} />
                ) : (
                  meal.data?.data.name
                )}
              </Typography>
              <Typography variant="body1" mb={2}>
                {meal.isLoading ? (
                  <Skeleton width={150} height={20} />
                ) : (
                  meal.data?.data.description
                )}
              </Typography>
              <Typography variant="caption">
                {meal.isLoading ? (
                  <Skeleton width={70} height={20} />
                ) : (
                  meal.data?.data.calories
                )}
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
          {!meal.isLoading && !meal.isError && (
            <MealForm
              task="update"
              loadingButtonProps={{
                loading: updateMeal.isPending,
              }}
              onSubmit={(values) => {
                const mutatedValues = {
                  ...values,
                  types: values.types.map((ty) => ty.id),
                };
                updateMeal.mutate(mutatedValues);
              }}
              initialValues={{
                ...meal?.data?.data,
              }}
            />
          )}
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
              loading={deleteMeal.isPending}
              onClick={() => {
                deleteMeal.mutate();
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
