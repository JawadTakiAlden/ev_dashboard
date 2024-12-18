import { Box, Typography } from "@mui/material";
import WorkoutForm from "../components/WorkoutForm";
import { useSearchParams } from "react-router-dom";

const CreateWorkout = () => {
  const [searchParams] = useSearchParams();

  const user_id = searchParams.get("user_id") as string | null;
  const user_name = searchParams.get("user_name") as string;
  const type = searchParams.get("type") as "group" | "personalized";
  const day = searchParams.get("day") as string;

  return (
    <Box>
      <Typography variant="h4" mb={4} sx={{ color: "primary.main" }}>
        Create {type} workout{" "}
        {type === "personalized" && " for user " + user_name + " in " + day}
      </Typography>
      <WorkoutForm
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          title: "",
          description: "",
          type: type,
          duration: 0,
          difficulty_level: "easy",
          coach: null,
          user: user_id !== null ? parseInt(user_id) : user_id,
          exercises: [],
        }}
      />
    </Box>
  );
};

export default CreateWorkout;
