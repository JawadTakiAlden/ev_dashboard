import { alpha, Box, Stack } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import DeleteTypography from "../../../components/DeleteTypography";
import CreateSurvey from "../../Survey/createSurvey/createSurvey";
import { surveys } from "../../../tables-def/survey";
import SurveyCard from "./SurveyCard";

const Survey = () => {
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <DeleteTypography
            sx={{
              borderLeftColor: (theme) =>
                alpha(theme.palette.primary.main, 0.4),
              mb: 2,
            }}
          >
            Surveys Management
          </DeleteTypography>
          <CreateSurvey />
        </Grid>
        <Grid size={12}>
          <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
            {surveys.map((survey, i) => (
              <SurveyCard key={i} survey={survey} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Survey;
