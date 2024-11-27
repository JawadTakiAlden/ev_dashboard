import { Box } from "@mui/material";
import WorkoutForm from "../components/WorkoutForm";

const CreateWorkout = () => {
  return (
    <Box>
      <WorkoutForm
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          title: "",
          description: "",
          type: "group",
          duration: 0,
          difficulty_level: "easy",
          coach: null,
          user: null,
          exercises: [],
        }}
      />
    </Box>
  );
};

export default CreateWorkout;
