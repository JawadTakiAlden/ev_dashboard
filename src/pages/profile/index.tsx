import {
  Box,
  Divider,
  Skeleton,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import Screen from "../../components/Screen";
import useGetGetDarkValue from "../../utils/useGetGetDarkValue";
import LineChart from "../../components/charts/LineChart";
import MainCard from "../../components/MainCard";
import SectionTitle from "../../components/SectionTitle";
import JustInViewRender from "../../components/JustInViewRender";
import { useSearchParams } from "react-router-dom";
import WorkoutManagement from "../../components/WorkoutManagement/WorkoutManagement";
import { useGetUserInformations, useGetUsersWorkout } from "../../api/users";
import LoadingDataError from "../../components/LoadingDataError";
import ActivateController from "./ActivateController";
import Loadable from "../../components/Loadable";
import { lazy } from "react";
import MealSelection from "./MealSelection";
import SurveyAnswer from "./SurveyAnswer";

const FitnessSubscriptionList = Loadable(
  lazy(() => import("./FitnessSubscription"))
);
const WorkoutLogs = Loadable(lazy(() => import("./WorkoutLogs")));
const MealSubscription = Loadable(lazy(() => import("./MealSubscription")));

const BasicInfoTypography = styled(Typography)(() => ({
  fontSize: "calc(16px + 0.15vw)",
  fontWeight: "500",
  textTransform: "capitalize",
}));

const UserProfile = () => {
  const { getVlaue } = useGetGetDarkValue();
  const [searchParams] = useSearchParams();
  const user = useGetUserInformations();

  const theme = useTheme();
  const day = searchParams.get("day");

  const getUserWorkouts = useGetUsersWorkout(day!);

  const userProfileData = user[0].data?.data;

  const withRecords = user[5].data?.data || [];

  const chartData = withRecords.map((record) => ({
    x: record.date,
    y: record.weight,
  }));

  console.log(chartData);

  const series = [
    {
      name: "Weight",
      data: chartData,
    },
  ];

  return (
    <Screen title="jawad taki aldeen">
      <Box
        sx={{
          backgroundImage: (theme) =>
            theme.palette.mode === "dark"
              ? `linear-gradient(to right , ${theme.palette.grey[800]} , ${theme.palette.grey[900]})`
              : `linear-gradient(to right , ${theme.palette.grey[200]} , ${theme.palette.grey[300]})`,
          height: "300px",
          borderRadius: "40px 0px 0px 0px",
        }}
      />
      <Grid container spacing={{ xs: 1, sm: gridSpacing }}>
        <Grid
          size={{ xs: 12, sm: 2 }}
          sx={{ minWidth: "200px" }}
          justifyContent={"flex-end"}
        >
          <Stack
            flexDirection={"row"}
            justifyContent={{ xs: "center", sm: "flex-end" }}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                position: "relative",
                transform: "translateY(-50px)",
              }}
            />
          </Stack>
        </Grid>
        <Grid size={"grow"}>
          <Grid container sx={{ py: 2 }} spacing={gridSpacing}>
            <Grid size={12}>
              <Stack
                flexDirection={{ xs: "column-reverse", sm: "row" }}
                justifyContent={"space-between"}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Stack gap={2}>
                  {user[0].isLoading ? (
                    <Skeleton width={150} variant="text" />
                  ) : (
                    <BasicInfoTypography
                      sx={{
                        textAlign: { xs: "center", sm: "start" },
                        width: "100%",
                        fontSize: "calc(20px + 1vw)",
                        fontWeight: "700",
                      }}
                    >
                      {userProfileData?.name}
                    </BasicInfoTypography>
                  )}

                  {user[0].isLoading ? (
                    <Skeleton width={250} variant="text" />
                  ) : (
                    <BasicInfoTypography
                      sx={{
                        textAlign: { xs: "center", sm: "start" },
                        width: "100%",
                        mt: 1,
                        color: (theme) =>
                          getVlaue(
                            theme.palette.grey[200],
                            theme.palette.grey[700]
                          ),
                      }}
                    >
                      {userProfileData?.email}
                    </BasicInfoTypography>
                  )}

                  {user[0].isLoading ? (
                    <Skeleton width={250} variant="text" />
                  ) : (
                    <BasicInfoTypography
                      sx={{
                        textAlign: { xs: "center", sm: "start" },
                        width: "100%",
                        mt: 1,
                        color: (theme) =>
                          getVlaue(
                            theme.palette.grey[200],
                            theme.palette.grey[700]
                          ),
                      }}
                    >
                      {userProfileData?.phone}
                    </BasicInfoTypography>
                  )}
                  {user[0].isLoading ? (
                    <>
                      <Skeleton width={250} variant="text" />
                      <Skeleton width={240} variant="text" />
                      <Skeleton width={230} variant="text" />
                      <Skeleton width={220} variant="text" />
                      <Skeleton width={200} variant="text" />
                    </>
                  ) : (
                    <Stack gap={2}>
                      <BasicInfoTypography>
                        Height :{" "}
                        {userProfileData?.height || "Profile setup required"}
                      </BasicInfoTypography>
                      <BasicInfoTypography>
                        Age : {userProfileData?.age || "Profile setup required"}
                      </BasicInfoTypography>
                      <BasicInfoTypography>
                        Gender :{" "}
                        {userProfileData?.gender || "Profile setup required"}
                      </BasicInfoTypography>
                      <BasicInfoTypography>
                        training location :{" "}
                        {userProfileData?.training_location ||
                          "Profile setup required"}
                      </BasicInfoTypography>
                      <BasicInfoTypography>
                        Sport :{" "}
                        {userProfileData?.sport?.title ||
                          "Profile setup required"}
                      </BasicInfoTypography>

                      <BasicInfoTypography>
                        Goal :{" "}
                        {userProfileData?.goal || "Profile setup required"}
                      </BasicInfoTypography>
                      <BasicInfoTypography>
                        dietary preferences :{" "}
                        {userProfileData?.dietary_preferences ||
                          "Profile setup required"}
                      </BasicInfoTypography>
                      <BasicInfoTypography>
                        sport duration :{" "}
                        {userProfileData?.sport_duration ||
                          "Profile setup required"}
                      </BasicInfoTypography>
                    </Stack>
                  )}
                </Stack>
                <Box>
                  <ActivateController
                    isLoading={user[0].isLoading}
                    isActive={user[0]?.data?.data.is_blocked || false}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid size={12}>
        {user[4].isLoading ? (
          <MainCard border={false}>
            <Skeleton width={150} variant="text" />
            <Skeleton width={140} variant="text" />
            <Skeleton width={130} variant="text" />
            <Skeleton width={120} variant="text" />
          </MainCard>
        ) : (
          <FitnessSubscriptionList data={user[4].data?.data || []} />
        )}
      </Grid>
      <Grid size={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid size={12}>
        {user[3].isLoading ? (
          <MainCard border={false}>
            <Skeleton width={150} variant="text" />
            <Skeleton width={140} variant="text" />
            <Skeleton width={130} variant="text" />
            <Skeleton width={120} variant="text" />
          </MainCard>
        ) : (
          <MealSubscription mealsSubscription={user[3].data?.data || []} />
        )}
      </Grid>

      <Grid size={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid size={12}>
        {user[2].isLoading ? (
          <MainCard border={false}>
            <Skeleton width={150} variant="text" />
            <Skeleton width={140} variant="text" />
            <Skeleton width={130} variant="text" />
            <Skeleton width={120} variant="text" />
          </MainCard>
        ) : (
          <MealSelection mealSelection={user[2].data?.data || []} />
        )}
      </Grid>
      <Grid size={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid size={12}>
        {user[1].isLoading ? (
          <MainCard border={false}>
            <Skeleton width={150} variant="text" />
            <Skeleton width={140} variant="text" />
            <Skeleton width={130} variant="text" />
            <Skeleton width={120} variant="text" />
          </MainCard>
        ) : (
          <SurveyAnswer surveyAnswers={user[1].data?.data || []} />
        )}
      </Grid>
      <Grid size={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <SectionTitle>Progress History</SectionTitle>
          <Grid container spacing={gridSpacing}>
            <Grid size={12}>
              <MainCard border={false} sx={{ p: 1 }}>
                <Typography variant="h4">Weigh Progress</Typography>
                <JustInViewRender>
                  <LineChart
                    type="line"
                    series={series}
                    options={{
                      colors: [theme.palette.secondary.light],
                      chart: {
                        type: "line",
                        zoom: {
                          enabled: false,
                        },
                      },
                      tooltip: {
                        theme: theme.palette.mode,
                      },
                      grid: {
                        borderColor: theme.palette.divider,
                      },
                      xaxis: {
                        type: "category",
                        labels: {
                          style: {
                            colors: Array.from(
                              { length: withRecords.length },
                              () => theme.palette.text.primary
                            ),
                          },
                        },
                        title: {
                          text: "Date",
                        },
                      },
                      yaxis: {
                        labels: {
                          style: {
                            colors: [theme.palette.primary.main],
                          },
                        },
                        title: {
                          text: "Weight (kg)",
                        },
                      },
                      stroke: {
                        curve: "smooth",
                      },
                      title: {
                        text: "Weight Record Over Time",
                        align: "center",
                      },
                    }}
                    height={400}
                  />
                </JustInViewRender>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <WorkoutLogs />
        </Grid>
      </Grid>

      <Box sx={{ my: 2 }}>
        {getUserWorkouts.isLoading && (
          <Skeleton width={"100%"} height={"400px"} />
        )}
        {getUserWorkouts.isError ? (
          <LoadingDataError refetch={getUserWorkouts.refetch} />
        ) : getUserWorkouts.isLoading ? (
          <Typography sx={{ textAlign: "center" }}>Loading...</Typography>
        ) : (
          <WorkoutManagement
            type={"personalized"}
            user={{
              id: userProfileData?.id!,
              name: userProfileData?.name!,
            }}
            targetPackage={{
              id: 5,
              name: "package of user",
            }}
            data={getUserWorkouts.data?.data || {}}
          />
        )}
      </Box>
    </Screen>
  );
};

export default UserProfile;
