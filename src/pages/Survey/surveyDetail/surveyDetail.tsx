import React from "react";
import { surveyDetail } from "../../../tables-def/survey";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import UnderlineHeader from "../../../components/UnderlineHeader";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import SurveyForm from "../components/SurveyForm";
import SurveyQuestions from "../../surveyQuestions";

const SurveyDetail = ({ withActions = true }: { withActions?: boolean }) => {
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <UnderlineHeader>{surveyDetail.title}</UnderlineHeader>
        </Grid>
        {withActions && (
          <Grid size={12}>
            <DeleteTypography mb={2} color="warning">
              Update Survey
            </DeleteTypography>
            <SurveyForm
              task="update"
              initialValues={{
                title: surveyDetail.title,
                package_id: surveyDetail.package_id,
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            />
          </Grid>
        )}

        <Grid size={12}>
          <DeleteTypography mb={2} color="primary">
            Question Management
          </DeleteTypography>
          <SurveyQuestions
            withActions={withActions}
            questions={surveyDetail.questions}
          />
        </Grid>
        {withActions && (
          <Grid size={12}>
            <DeleteTypography mb={2}>Delete Sirvey</DeleteTypography>
            <Typography mb={2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              aliquid reprehenderit, repudiandae, quisquam delectus dolore
              dignissimos voluptatibus sunt quaerat consequatur unde sequi!
              Excepturi in totam voluptatem sed cumque cupiditate quam?
            </Typography>
            <DoupleClickToConfirm
              color={"error"}
              onClick={() => {
                console.log("delete");
              }}
            >
              Delete
            </DoupleClickToConfirm>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SurveyDetail;
