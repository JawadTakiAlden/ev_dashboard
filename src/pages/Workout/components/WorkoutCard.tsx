import React from "react";
import MainCard from "../../../components/MainCard";
import {
  alpha,
  Box,
  Chip,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as BaseLink } from "react-router-dom";
import { WorkoutModel } from "../../../tables-def/workout";

const WorkoutCard = ({ workout }: { workout: WorkoutModel }) => {
  return (
    <MainCard
      border={false}
      sx={{
        p: 2.25,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      cardContent={false}
    >
      <Stack
        sx={{ mb: 2 }}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="h4">{workout.title}</Typography>
        <Chip
          color="default"
          label={workout.type}
          sx={{
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: (theme) =>
              `${alpha(
                theme.palette[
                  workout.type === "group" ? "primary" : "secondary"
                ].main,
                0.2
              )}`,
          }}
        />
      </Stack>
      <Box>
        {workout.type === "personalized" && (
          <Link
            component={BaseLink}
            color="textPrimary"
            variant="body1"
            to={`/admin/dashboard/users/${workout.user?.id}`}
          >
            {workout.user?.name}
          </Link>
        )}
        <Typography mb={1} mt={1} fontWeight={"500"}>
          {workout.description}
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            textTransform: "capitalize",
            fontStyle: "italic",
            color: "text.secondary",
          }}
        >
          Level : {workout.difficulty_level}
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            textTransform: "capitalize",
            fontStyle: "italic",
            color: "text.secondary",
          }}
        >
          expeced duration : {workout.duration}
        </Typography>
      </Box>
      <Box>
        <Divider sx={{ my: 1 }} />
        <Link
          component={BaseLink}
          color="primary"
          variant="button"
          to={`/admin/dashboard/workout/${workout.id}`}
        >
          more
        </Link>
      </Box>
    </MainCard>
  );
};

export default WorkoutCard;
