import { Box } from "@mui/material";
import React from "react";
import { packages } from "../../tables-def/packages";
import PackageCard from "./PackageCard";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import PackageForm from "./components/packageForm";

const Packages = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <PackageForm
          initialValues={{
            name: "",
            description: "",
            type: "group",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </Box>
      <Grid container spacing={gridSpacing}>
        {packages.map((pack, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
            <PackageCard packageRow={pack} />{" "}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
