import {
  Box,
  Divider,
  FormControlLabel,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  styled,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import Screen from "../../components/Screen";
import useGetGetDarkValue from "../../utils/useGetGetDarkValue";
import LineChart from "../../components/charts/LineChart";
import MainCard from "../../components/MainCard";
import { WorkoutLog } from "../../tables-def/workout-logs";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import {
  FitnessSubscription,
  getProgressHistoryChartData,
  userProfile,
} from "../../tables-def/user-profile";
import JustInViewRender from "../../components/JustInViewRender";
import { useSearchParams } from "react-router-dom";
import WorkoutManagement from "../../components/WorkoutManagement/WorkoutManagement";
import { workouts } from "../../tables-def/workout";
import { useGetUserProfile, useGetUserWeightRecords } from "../../api/users";
import {
  areEqual,
  FixedSizeList as List,
  ListChildComponentProps,
} from "react-window";

const InformationTypography = styled(Typography)(() => ({
  fontSize: "calc(18px + 0.02vw)",
}));

const RenderRow = ({ workout }: { workout: WorkoutLog }) => {
  const { type, workout_name, date } = workout;
  const action = type === "join" ? "joined" : "completed";
  const { getVlaue } = useGetGetDarkValue();

  return (
    <ListItem component="div" disablePadding>
      <ListItemButton>
        <ListItemText
          sx={{
            fontWeight: "400",
            "& .MuiTypography-root": {
              fontSize: "18px !important",
            },
            color: (theme) =>
              getVlaue(theme.palette.grey[400], theme.palette.grey[700]),
            "& .workout": {
              fontWeight: "600",
              color: "text.primary",
            },
            "& .date": {
              fontWeight: "500",
              color: getVlaue("primary.dark", "primary.light"),
            },
          }}
        >
          Player <span className="action">{action}</span> the{" "}
          <span className="workout">"{workout_name}"</span> workout on{" "}
          <span className="date">{date}</span>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

const Subscription: React.FC<
  ListChildComponentProps<FitnessSubscription[]>
> = ({ index, style, data }) => {
  const subscription = data[index];

  return (
    <div
      style={{
        ...style,
        width: "300px",
      }}
      key={index}
    >
      <MainCard border={false}>
        <SectionTitle>Subscription Plan</SectionTitle>
        <Stack gap="10px">
          <InformationTypography>
            Subscriped at : {subscription.start_date}
          </InformationTypography>
          <InformationTypography>
            Experid On : {subscription.end_date}
          </InformationTypography>
          <InformationTypography>
            the player should be renew after {subscription.days_left} days
          </InformationTypography>
        </Stack>
      </MainCard>
    </div>
  );
};

const UserProfile = () => {
  const { getVlaue } = useGetGetDarkValue();
  const theme = useTheme();
  const [profile] = useState(userProfile);
  const [, setActiveDay] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const user = useGetUserProfile();
  // const [chartdata, setChartdata] = useState<{
  //   catgeories: string[];
  //   series: number[];
  // } | null>(null);

  // const chartData = useGetUserWeightRecords();
  // const { catgeories, series } = getProgressHistoryChartData({
  //   weightProgress: profile.progress_history,
  // });

  // const barData = getProgressHistoryChartData({
  //   weightProgress: profile.progress_history,
  // });

  const package_id = searchParams.get("package_id");
  const day = searchParams.get("day");

  useEffect(() => {
    setActiveDay(day);
  }, [day, package_id]);

  // useEffect(() => {
  //   if (chartData.isSuccess) {
  //     console.log(chartData.data.data);
  //   }
  // }, [chartData]);

  const userProfileData = user?.data?.data;

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
                <Box>
                  {user.isLoading ? (
                    <Skeleton width={150} variant="text" />
                  ) : (
                    <Typography
                      variant="h2"
                      sx={{
                        textAlign: { xs: "center", sm: "start" },
                        width: "100%",
                      }}
                    >
                      {userProfileData?.name}
                    </Typography>
                  )}

                  {user.isLoading ? (
                    <Skeleton width={250} variant="text" />
                  ) : (
                    <Typography
                      variant="subtitle1"
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
                    </Typography>
                  )}

                  {user.isLoading ? (
                    <Skeleton width={250} variant="text" />
                  ) : (
                    <Typography
                      variant="subtitle1"
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
                    </Typography>
                  )}
                </Box>
                <Box>
                  <FormControlLabel
                    label="Activate"
                    control={<Switch size="medium" />}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12}>
              {user.isLoading ? (
                <MainCard border={false}>
                  <Skeleton width={150} variant="text" />
                  <Skeleton width={140} variant="text" />
                  <Skeleton width={130} variant="text" />
                  <Skeleton width={120} variant="text" />
                </MainCard>
              ) : (
                <>
                  <List
                    itemCount={
                      userProfileData?.fitness_subscriptions?.length || 0
                    }
                    itemSize={310}
                    height={380}
                    width={1000}
                    itemData={userProfileData?.fitness_subscriptions}
                    layout="horizontal"
                    style={{
                      width: "100%",
                    }}
                  >
                    {Subscription}
                  </List>
                </>
              )}
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <SectionTitle>Progress History</SectionTitle>
          {/* <Grid container spacing={gridSpacing}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MainCard border={false} sx={{ p: 1 }}>
                <Typography variant="h4">Weigh Progress</Typography>
                <JustInViewRender>
                  <LineChart
                    series={[
                      {
                        name: "Weight",
                        data: series,
                      },
                    ]}
                    options={{
                      colors: [
                        getVlaue(
                          theme.palette.grey[500],
                          theme.palette.primary.main
                        ),
                      ],
                      tooltip: {
                        theme: theme.palette.mode,
                      },
                      grid: {
                        borderColor: theme.palette.divider,
                      },
                      yaxis: {
                        labels: {
                          style: {
                            colors: [theme.palette.primary.main],
                          },
                        },
                      },
                      xaxis: {
                        categories: catgeories,
                        labels: {
                          style: {
                            colors: [
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                            ],
                          },
                        },
                      },
                    }}
                  />
                </JustInViewRender>
              </MainCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MainCard border={false} sx={{ p: 1 }}>
                <Typography variant="h4">Weigh Progress</Typography>
                <JustInViewRender>
                  <LineChart
                    type="bar"
                    series={[
                      {
                        name: "Weight",
                        data: barData.series,
                      },
                    ]}
                    options={{
                      colors: [theme.palette.secondary.light],
                      tooltip: {
                        theme: theme.palette.mode,
                      },
                      grid: {
                        borderColor: theme.palette.divider,
                      },
                      yaxis: {
                        labels: {
                          style: {
                            colors: [theme.palette.primary.main],
                          },
                        },
                      },
                      xaxis: {
                        categories: barData.catgeories,
                        labels: {
                          style: {
                            colors: [
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                              theme.palette.text.primary,
                            ],
                          },
                        },
                      },
                    }}
                  />
                </JustInViewRender>
              </MainCard>
            </Grid>
          </Grid> */}
        </Grid>
        {/* <Grid size={12}>
          <SectionTitle>Workout Logs</SectionTitle>
          <MainCard
            sx={{
              width: "100%",
              height: "400px",
              overflow: "auto",
              bgcolor: "background.paper",
            }}
          >
            {profile.workout_logs.slice(0, 20).map((workout, i) => (
              <RenderRow key={i} workout={workout} />
            ))}
          </MainCard>
        </Grid> */}
      </Grid>
      <Grid sx={{ mt: 2 }} container spacing={gridSpacing}>
        <WorkoutManagement
          type={"personalized"}
          user={{
            id: userProfile.id,
            name: userProfile.name,
          }}
          targetPackage={{
            id: 5,
            name: "package of user",
          }}
          data={{
            Saturday: [workouts[0]],
          }}
        />
      </Grid>
    </Screen>
  );
};

export default UserProfile;
