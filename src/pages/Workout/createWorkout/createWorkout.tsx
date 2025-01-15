import { Box, Typography } from "@mui/material";
import WorkoutForm from "../components/WorkoutForm";
import { useSearchParams } from "react-router-dom";
import { useCreateWorkout } from "../../../api/workout";

const CreateWorkout = () => {
  const [searchParams] = useSearchParams();

  const user_id = searchParams.get("user_id") as string | null;
  const user_name = searchParams.get("user_name") as string;
  const type = searchParams.get("type") as "group" | "personalized";
  const day = searchParams.get("day") as string;
  const package_id = searchParams.get("package_id") as string;
  const packageName = searchParams.get("package_name") as string;

  const createWorkout = useCreateWorkout();

  return (
    <Box>
      <Typography variant="h4" mb={4} sx={{ color: "primary.main" }}>
        Create {type} workout{" "}
        {type === "personalized"
          ? " for user " + user_name + " in " + day
          : `for ${packageName} package`}
      </Typography>
      <WorkoutForm
        onSubmit={(values) => {
          createWorkout.mutate({ ...values, day });
        }}
        initialValues={{
          title: "",
          image: null,
          description: "",
          type: type,
          duration: 0,
          calories_burned: 0,
          difficulty_level: "easy",
          package_id: package_id,
          user_id: user_id,
          exercises: [],
        }}
      />
    </Box>
  );
};

export default CreateWorkout;
