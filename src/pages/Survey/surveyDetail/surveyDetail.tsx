import { Box, Button, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import UnderlineHeader from "../../../components/UnderlineHeader";
import DeleteTypography from "../../../components/DeleteTypography";
import DoupleClickToConfirm from "../../../components/DoupleClickToConfirm";
import SurveyForm from "../components/SurveyForm";
import SurveyQuestions from "../../surveyQuestions";
import {
  useDeleteSurvey,
  useShowSurvey,
  useUpdateSurvey,
} from "../../../api/surveys";
import { useParams } from "react-router";
import LoadingDataError from "../../../components/LoadingDataError";

const SurveyDetail = ({ withActions = true }: { withActions?: boolean }) => {
  const survey = useShowSurvey();
  const deleteSurvey = useDeleteSurvey(true);
  const { surveyId } = useParams();
  const updateSurvey = useUpdateSurvey();

  if (survey.isLoading) {
    return (
      <>
        <Skeleton width={100} variant="text" sx={{ mb: 2 }} />
        <Skeleton width={"100%"} height={200} variant="text" sx={{ mb: 2 }} />
        <Skeleton width={"30%"} variant="text" sx={{ mb: 2 }} />
        <Skeleton width={"70%"} variant="text" sx={{ mb: 2 }} />
        <Skeleton component={Button} variant="text" sx={{ mb: 2 }} />
      </>
    );
  }

  if (survey.isError) {
    return <LoadingDataError refetch={survey.refetch} />;
  }

  const surveyData = survey.data?.data[0];

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <UnderlineHeader>{surveyData?.title}</UnderlineHeader>
        </Grid>
        {withActions && (
          <Grid size={12}>
            <DeleteTypography mb={2} color="warning">
              Update Survey
            </DeleteTypography>
            <SurveyForm
              task="update"
              initialValues={surveyData!}
              loadingButtonProps={{
                loading: updateSurvey.isPending,
              }}
              onSubmit={(values) => {
                updateSurvey.mutate({ title: values.title });
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
            questions={surveyData?.questions}
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
                deleteSurvey.mutate(parseInt(surveyId!));
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
