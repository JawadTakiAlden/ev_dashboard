import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import { WorkoutModel, workouts } from "../../tables-def/workout";
import WorkoutCard from "./components/WorkoutCard";

const Workout = ({ data = workouts }: { data?: WorkoutModel[] }) => {
  return (
    <Box>
      <Grid container spacing={gridSpacing} alignItems={"stretch"}>
        {data.map((workout, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WorkoutCard workout={workout} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Workout;
