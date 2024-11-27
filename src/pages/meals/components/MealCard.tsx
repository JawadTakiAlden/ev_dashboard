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

const MealCard = ({
  meal,
  withAction = true,
  withExtraInfo = true,
}: {
  meal: Meal;
  withAction?: boolean;
  withExtraInfo?: boolean;
}) => {
  return (
    <MainCard
      sx={{
        height: !withExtraInfo ? "410px" : "auto",
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
          image={meal.image_url}
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
            <Typography variant="body2">
              carbohydrates : {meal.carbohydrates}
            </Typography>
            <Typography variant="body2">fats : {meal.fats}</Typography>
            <Typography variant="body2">fiber : {meal.fiber}</Typography>
            <Stack mt={1} flexDirection={"row"} gap={1} flexWrap={"wrap"}>
              {meal.ingredients.map((ing) => {
                return <Chip label={ing.title} />;
              })}
            </Stack>
          </Box>
        )}
      </CardContent>
      {withAction && (
        <CardActions disableSpacing>
          <IconButton
            component={Link}
            to={`/admin/dashboard/meals/${meal.id}`}
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
