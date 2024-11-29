import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { gridSpacing } from "../../config";
import { banners } from "../../tables-def/banner";
import BannerCard from "./components/BannerCard";
import AddBanner from "./components/addBanner";

const Banners = () => {
  return (
    <Box>
      <AddBanner />
      <Grid container spacing={gridSpacing}>
        {banners.map((banner, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
            <BannerCard banner={banner} key={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Banners;
