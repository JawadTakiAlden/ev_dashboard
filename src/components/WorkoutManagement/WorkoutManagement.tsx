import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import { Box, Button, ListItemButton, Stack } from "@mui/material";
import { days } from "../../tables-def/days";
import { useNavigate, useSearchParams } from "react-router-dom";
import { WorkoutModel } from "../../tables-def/workout";
import Workout from "../../pages/Workout";
import { useAuthContext } from "../../providers/AuthProvider";

interface WorkoutManagementData {
  [key: string]: WorkoutModel[];
}

const WorkoutManagement = ({
  type,
  user,
  targetPackage,
  data,
}: {
  type: "group" | "personalized";
  user?: {
    id: number;
    name: string;
  };
  targetPackage: {
    id: number;
    name: string;
  };
  data: WorkoutManagementData;
}) => {
  const daysContainerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState<string>("Saturday");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const day = searchParams.get("day") as string;
  const { base } = useAuthContext();

  useEffect(() => {
    if (!day) {
      setActiveDay(days[0]);
      searchParams.set("day", days[0]);
      setSearchParams(searchParams);
    }
  }, [day, searchParams, setSearchParams]);

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
            <Workout data={data[activeDay]} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkoutManagement;
