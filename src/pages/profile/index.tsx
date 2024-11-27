import {
  Box,
  Divider,
  FormControlLabel,
  ListItem,
  ListItemButton,
  ListItemText,
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
import { useState } from "react";
import {
  getProgressHistoryChartData,
  userProfile,
} from "../../tables-def/user-profile";
import JustInViewRender from "../../components/JustInViewRender";

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

const UserProfile = () => {
  const { getVlaue } = useGetGetDarkValue();
  const theme = useTheme();
  const [profile] = useState(userProfile);

  const { catgeories, series } = getProgressHistoryChartData({
    weightProgress: profile.progress_history,
  });

  const barData = getProgressHistoryChartData({
    weightProgress: profile.progress_history,
  });

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
                  <Typography
                    variant="h2"
                    sx={{
                      textAlign: { xs: "center", sm: "start" },
                      width: "100%",
                    }}
                  >
                    {profile.name}
                  </Typography>
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
                    {profile.email}
                  </Typography>
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
                    {profile.birth_of_date}
                  </Typography>
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
              <SectionTitle>Subscription Plan</SectionTitle>
              <Stack gap="10px">
                <InformationTypography>
                  this account belongs to {profile.subscription.name}{" "}
                  subscription plan
                </InformationTypography>
                <InformationTypography>
                  Enrolled at : {profile.created_at}
                </InformationTypography>
                <InformationTypography>
                  Subscriped at : {profile.subscription.start_date}
                </InformationTypography>
                <InformationTypography>
                  Experid On : {profile.subscription.end_date}
                </InformationTypography>
              </Stack>
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
          <Grid container spacing={gridSpacing}>
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
          </Grid>
        </Grid>
        <Grid size={12}>
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
        </Grid>
      </Grid>
    </Screen>
  );
};

export default UserProfile;
