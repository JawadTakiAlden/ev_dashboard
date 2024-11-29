import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import PackageForm from "./components/packageForm";
import Pricing from "./components/Pricing";
import Survey from "./components/Survey";

const PackageDetail = () => {
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <PackageForm
            task="update"
            initialValues={{
              name: "package one ipdated",
              description: "i want to update package one",
              type: "group",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          />
        </Grid>
        <Grid size={12}>
          <Pricing />
        </Grid>
        <Grid size={12}>
          <Survey />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PackageDetail;
