import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { Package } from "../../tables-def/packages";
import PackageCard from "./PackageCard";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../config";
import PackageForm from "./components/packageForm";
import { useCreatePackages, useGetPackages } from "../../api/packages";
import LoadingDataError from "../../components/LoadingDataError";

const Packages = ({ withCreate = true }: { withCreate?: boolean }) => {
  const packages = useGetPackages();
  const createPackages = useCreatePackages();
  return (
    <Box>
      {withCreate && (
        <Box sx={{ mb: 2 }}>
          <PackageForm
            initialValues={{
              name: "",
              description: "",
              type: "group",
            }}
            loadingButtonProps={{
              loading: createPackages.isPending,
            }}
            onSubmit={(values) => {
              createPackages.mutate(values);
            }}
          />
        </Box>
      )}
      {!packages.isLoading &&
        !packages.isError &&
        packages.data?.data.length === 0 && (
          <Typography>no packages found</Typography>
        )}
      <Grid container spacing={gridSpacing}>
        {packages.isLoading && (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Skeleton width={"100%"} height={150} animation="wave" />
          </Grid>
        )}
        {packages.isError && <LoadingDataError refetch={packages.refetch} />}
        {!packages.isLoading &&
          !packages.isError &&
          packages.data?.data.map((pack: Package, i: number) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <PackageCard packageRow={pack} />{" "}
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Packages;
