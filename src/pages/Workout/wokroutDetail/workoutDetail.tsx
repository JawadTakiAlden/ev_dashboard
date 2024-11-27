import { alpha, Box, Chip, Link, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { WorkoutCompletion, workoutDetail } from "../../../tables-def/workout";
import MainCard from "../../../components/MainCard";
import { Link as BaseLink } from "react-router-dom";
import DeleteTypography from "../../../components/DeleteTypography";
import {
  areEqual,
  FixedSizeList as List,
  ListChildComponentProps,
} from "react-window";
import ExcerciseCard from "../../Exercise/components/ExcerciseCard";
import memoize from "memoize-one";

const Exercise: React.FC<ListChildComponentProps> = memo(
  ({ index, style, data }) => (
    <div style={{ ...style, width: "300px" }} key={index}>
      <ExcerciseCard exercise={data[index].exercise} />
    </div>
  ),
  areEqual
);

const CompletionCard = ({ completion }: { completion: WorkoutCompletion }) => {
  return (
    <MainCard cardContent={false} sx={{ p: 2, width: "250px" }} border={false}>
      <Stack justifyContent={"center"} alignItems={"center"} gap={4}>
        <Link
          component={BaseLink}
          variant="h5"
          to={`/admin/dashboard/users/${completion.user.id}`}
        >
          {completion.user.name}
        </Link>
        <Typography variant="h6">{completion.createdAt}</Typography>
      </Stack>
    </MainCard>
  );
};

const Completion: React.FC<ListChildComponentProps> = memo(
  ({ index, style, data }) => (
    <div style={{ ...style }} key={index}>
      <CompletionCard completion={data[index]} />
    </div>
  ),
  areEqual
);

const createItemData = memoize((items) => ({
  items,
}));

const WorkOutDetailPage = () => {
  const exercises = createItemData(workoutDetail.exercises);
  const completions = createItemData(workoutDetail.workout_completion);
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <MainCard cardContent={false} sx={{ p: 2.5 }}>
            <Stack
              flexDirection={{ sm: "row" }}
              justifyContent={"space-between"}
              alignItems={{ sm: "center" }}
              gap={2}
            >
              <Box flex={2}>
                <Typography mb={1} variant="h3">
                  {workoutDetail.title}
                </Typography>
                <Typography variant="h5" mb={1}>
                  {workoutDetail.description}
                </Typography>
                <Typography>
                  Coach :{" "}
                  {workoutDetail.type === "group" && (
                    <Link
                      component={BaseLink}
                      color="textPrimary"
                      variant="body1"
                      to={`/admin/dashboard/users/${workoutDetail.user?.id}`}
                    >
                      {workoutDetail.coach}
                    </Link>
                  )}
                </Typography>
                <Typography>
                  user :{" "}
                  {workoutDetail.type === "group" && (
                    <Link
                      component={BaseLink}
                      color="textPrimary"
                      variant="body1"
                      to={`/admin/dashboard/users/${workoutDetail.user?.id}`}
                    >
                      {workoutDetail.user?.name}
                    </Link>
                  )}
                </Typography>
              </Box>
              <Box flex={1}>
                <Chip
                  color={
                    workoutDetail.type === "group" ? "primary" : "secondary"
                  }
                  label={workoutDetail.type}
                  sx={{ borderRadius: "4px", mb: 1 }}
                />

                <Typography
                  sx={{
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    color: "text.secondary",
                    mb: 1,
                  }}
                >
                  Level : {workoutDetail.difficulty_level}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    color: "text.secondary",
                    mb: 1,
                  }}
                >
                  expeced duration : {workoutDetail.duration}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    color: "text.secondary",
                    mb: 1,
                  }}
                >
                  created at : {workoutDetail.date}
                </Typography>
              </Box>
            </Stack>
          </MainCard>
        </Grid>
        <Grid size={12}>
          <DeleteTypography
            sx={{
              borderLeftColor: (theme) =>
                alpha(theme.palette.secondary.main, 0.3),
              my: 2,
            }}
          >
            Workout Exercise
          </DeleteTypography>
          <Grid container spacing={gridSpacing} alignItems={"stretch"}>
            <List
              itemCount={workoutDetail.exercises.length}
              itemSize={310}
              height={400}
              width={1000}
              itemData={exercises.items}
              layout="horizontal"
              style={{
                width: "100%",
              }}
            >
              {Exercise}
            </List>
          </Grid>
        </Grid>
        <Grid size={12}>
          <DeleteTypography
            sx={{
              borderLeftColor: (theme) =>
                alpha(theme.palette.secondary.main, 0.3),
              my: 2,
            }}
          >
            Workout Completions
          </DeleteTypography>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontStyle: "italic",
              fontSize: "calc(16px + 0.15vw)",
              my: 2,
            }}
          >
            this workouts completed by {workoutDetail.workout_completion.length}{" "}
            users
          </Typography>
          <List
            itemCount={workoutDetail.workout_completion.length}
            itemSize={260}
            height={150}
            width={1000}
            itemData={completions.items}
            layout="horizontal"
            style={{
              width: "100%",
            }}
          >
            {Completion}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkOutDetailPage;
