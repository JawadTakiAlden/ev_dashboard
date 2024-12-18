import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Stack, Typography } from "@mui/material";
import { gridSpacing } from "../../config";
import BannerCard from "./components/BannerCard";
import AddBanner from "./components/addBanner";
import { useGetBanners } from "../../api/banner";
import { BannerModel } from "../../tables-def/banner";
import LoadingDataError from "../../components/LoadingDataError";

const Banners = () => {
  const banners = useGetBanners();

  if (banners.isError) {
    return (
      <Stack alignItems={"center"}>
        <Typography>Error while loading data</Typography>
        <Button onClick={() => banners.refetch()}>refetch</Button>
      </Stack>
    );
  }

  if (banners.isLoading) {
    return <LoadingDataError refetch={banners.refetch} />;
  }
  return (
    <Box>
      <AddBanner />
      <Grid container spacing={gridSpacing}>
        {banners.data?.data.map((banner: BannerModel, i: number) => (
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
            <BannerCard banner={banner} key={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Banners;
