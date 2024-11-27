import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import WorkoutForm from "../components/WorkoutForm";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";

const SettingsPannel = () => {
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <WorkoutForm
            task="update"
            initialValues={{
              title: "update from",
              description: "this form for update workout",
              difficulty_level: "its so easy to update the workout",
              duration: 30,
              type: "group",
              user: null,
              coach: null,
              exercises: [1, 4, 7],
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Box id="delete-exercise">
            <DeleteTypography mb={2}>Delete Workout</DeleteTypography>

            <Typography mb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem
              quod enim minima nostrum dolorem doloremque libero dolor quidem
              ipsam, eaque soluta ex nobis! Itaque excepturi blanditiis ab quasi
              temporibus.
            </Typography>

            <DoupleClickToConfirm
              color="error"
              onClick={() => {
                console.log("douple clicked");
              }}
            >
              Delete
            </DoupleClickToConfirm>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsPannel;
