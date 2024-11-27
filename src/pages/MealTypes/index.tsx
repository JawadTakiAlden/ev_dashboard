import { Box } from "@mui/material";
import { gridSpacing } from "../../config";
import Grid from "@mui/material/Grid2";
import MealType from "./MealType";
import MealIngrediant from "./MealIngrediant";

const MealTypes = () => {
  return (
    <Box>
      <Grid
        container
        spacing={gridSpacing}
        flexDirection={{ xs: "row-reverse", sm: "row" }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <MealType />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MealIngrediant />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MealTypes;
