import { alpha, Box, Stack } from "@mui/material";
import { gridSpacing } from "../../config";
import Grid from "@mui/material/Grid2";
import { Package, packages } from "../../tables-def/packages";
import MiniPackageCard from "./MiniPackageCard";
import WorkoutManagement from "../../components/WorkoutManagement/WorkoutManagement";
import { workouts } from "../../tables-def/workout";
import { useState } from "react";

const GroupWorkoutManagement = () => {
  const [selectedPackage, setSelectedPackage] = useState<null | Package>(null);

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <Box
            sx={{
              maxWidth: "100%",
              overflowX: "auto",
              pb: 1,
            }}
          >
            <Stack
              flexDirection={"row"}
              gap={2}
              alignItems={"flex-start"}
              sx={{ minwidth: "800px" }}
            >
              {packages.map((pac, i) => (
                <Box
                  key={i}
                  className={
                    selectedPackage?.id === pac.id ? "package-selected" : ""
                  }
                  sx={{
                    "&.package-selected": {
                      p: 0.3,
                    },
                    flexShrink: 0,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.3),
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "0.3s",
                  }}
                >
                  <Box
                    onClick={() => {
                      setSelectedPackage(pac);
                    }}
                  >
                    <MiniPackageCard packageRow={pac} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid size={12}>
          <WorkoutManagement
            type="group"
            targetPackage={{
              id: selectedPackage?.id!,
              name: selectedPackage?.name!,
            }}
            data={{
              Saturday: [workouts[0], workouts[1]],
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupWorkoutManagement;
