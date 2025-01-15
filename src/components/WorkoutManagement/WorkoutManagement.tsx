import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import { Box, Button, ListItemButton, Stack, Typography } from "@mui/material";
import { days } from "../../tables-def/days";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../providers/AuthProvider";
import WorkoutCard from "../../pages/Workout/components/WorkoutCard";

const WorkoutManagement = ({
  type,
  user,
  targetPackage,
  data,
  isLoading = false,
}: {
  type: "group" | "personalized";
  isLoading?: boolean;
  user?: {
    id: number;
    name: string;
  };
  targetPackage: {
    id: number;
    name: string;
  };
  data: any;
}) => {
  const daysContainerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState<string>("Saturday");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const day = searchParams.get("day") as string;
  const { base } = useAuthContext();

  // useEffect(() => {
  //   if (!day) {
  //     setActiveDay(days[0]);
  //     searchParams.set("day", days[0]);
  //     setSearchParams(searchParams);
  //   }
  // }, [day, searchParams, setSearchParams]);

  useEffect(() => {
    setActiveDay(day);
  }, [day]);

  useEffect(() => {
    const currentDayIndex = days.indexOf(day!);
    if (currentDayIndex === -1) return;

    const scrollOffset = currentDayIndex * 100 - 100;

    daysContainerRef.current?.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
    });
  }, [day]);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={12}>
        <Box
          ref={daysContainerRef}
          sx={{
            width: "100%",
            overflowX: "auto",
          }}
        >
          <Stack sx={{ minWidth: "800px" }} flexDirection={"row"} gap={2}>
            {days.map((day, i) => (
              <ListItemButton
                selected={day === activeDay}
                sx={{ justifyContent: "center", width: "100px" }}
                onClick={() => {
                  searchParams.set("day", day);
                  setSearchParams(searchParams);
                }}
                key={i}
              >
                {day}
              </ListItemButton>
            ))}
          </Stack>
        </Box>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={12}>
            <Button
              disabled={!day || !targetPackage.id}
              onClick={() => {
                navigate(
                  `/${base}/dashboard/workout/create?day=${activeDay}&package_id=${targetPackage.id!}&package_name=${
                    targetPackage?.name
                  }&type=${type}${
                    type === "personalized"
                      ? `&user_id=${user?.id}&user_name=${user?.name}`
                      : ""
                  }`
                );
              }}
              variant="contained"
            >
              add workout
            </Button>
          </Grid>
          <Grid size={12}>
            {isLoading ? (
              <Typography textAlign={"center"}>Loading...</Typography>
            ) : Object.keys(data).length !== 0 ? (
              <WorkoutCard workout={data} />
            ) : (
              <Typography>No workout here yet</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkoutManagement;
