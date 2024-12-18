import React from "react";
import { MealPlan } from "../../../tables-def/meal-plans";
import {
  alpha,
  Box,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MainCard from "../../../components/MainCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MealPlanCard = ({ plan }: { plan: MealPlan }) => {
  return (
    <MainCard cardContent={false} border={false} sx={{ px: 0, py: 2 }}>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            mb: 2,
            py: 1,
            position: "relative",
            px: 2,
            width: "fit-content",
            mx: "auto",
            "::after": {
              content: "''",
              position: "absolute",
              width: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              height: "4px",
              borderRadius: "4px",
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.2),
              bottom: 0,
            },
          }}
          variant="h4"
        >
          {plan.title}
        </Typography>
      </Box>
      <CardMedia
        component={"img"}
        image={plan.image}
        loading="lazy"
        height={250}
        sx={{ borderRadius: "12px" }}
      />
      <CardContent>
        <Stack flexDirection={"row"} gap={1} flexWrap={"wrap"}>
          {plan.types.map((mealType, i) => (
            <Chip
              variant="outlined"
              key={i}
              color="info"
              label={mealType.title}
            />
          ))}
        </Stack>
        <Typography
          sx={{
            my: 2,
            color: "text.secondary",
            "& .bolder": { color: "text.primary", fontWeight: "600" },
            fontStyle: "italic",
          }}
        >
          this plan comes with{" "}
          <span className="bolder">{plan.calories} calories</span> divided in{" "}
          {plan.types.length} meals on the day
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Courier New', monospace",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
          textAlign={"center"}
        >
          {plan.price_monthly + " SR"}
          <IconButton component={Link} to={`${plan.id}`}>
            <FaArrowRight />
          </IconButton>
        </Typography>
      </CardContent>
    </MainCard>
  );
};

export default MealPlanCard;
