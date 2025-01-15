import MainCard from "../../../components/MainCard";
import {
  Box,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Meal } from "../../../tables-def/meals";
import { numberOfLines } from "../../../utils/maxLinesNumber";
import { MdExpandCircleDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../providers/AuthProvider";

const MealCard = ({
  meal,
  withAction = true,
  withExtraInfo = true,
}: {
  meal: Meal;
  withAction?: boolean;
  withExtraInfo?: boolean;
}) => {
  const { user, base } = useAuthContext();
  withAction = user?.role === "admin" || user?.role === "kitchen_staff";
  return (
    <MainCard
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 0,
      }}
      border={false}
      cardContent={false}
    >
      <Box>
        <CardHeader
          title={meal.name}
          sx={{
            ...numberOfLines(1),
          }}
        />
        <CardMedia
          component={"img"}
          sx={{
            borderRadius: "12px",
          }}
          image={meal.images[0]}
          height={180}
        />
      </Box>
      <CardContent>
        <Typography
          mb={1}
          variant="body2"
          sx={{ color: "text.secondary", ...numberOfLines(3) }}
        >
          {meal.description}
        </Typography>
        <Typography variant="body2">calories : {meal.calories}</Typography>
        {withExtraInfo && (
          <Box>
            <Typography variant="body2">protein : {meal.protein}</Typography>
            <Typography variant="body2">carbohydrates : {meal.carb}</Typography>
            <Typography variant="body2">fats : {meal.fats}</Typography>
            <Typography variant="body2">fiber : {meal.fiber}</Typography>
          </Box>
        )}
        <Typography mb={1}>Types : </Typography>
        <Stack mb={1} mt={1} flexDirection={"row"} gap={1} flexWrap={"wrap"}>
          {meal.types.map((type) => {
            return <Chip key={type.id} label={type.title} />;
          })}
        </Stack>
        <Typography mb={1}>Ingredients : </Typography>
        <Stack mt={1} flexDirection={"row"} gap={1} flexWrap={"wrap"}>
          {meal.ingredients.map((ingred) => {
            return <Chip key={ingred.id} label={ingred.title} />;
          })}
        </Stack>
      </CardContent>
      {withAction && (
        <CardActions disableSpacing>
          <IconButton
            component={Link}
            to={`/${base}/dashboard/meals/${meal.id}`}
            sx={{
              transform: `rotate(-90deg)`,
              transition: "0.3s",
            }}
          >
            <MdExpandCircleDown />
          </IconButton>
        </CardActions>
      )}
    </MainCard>
  );
};

export default MealCard;
