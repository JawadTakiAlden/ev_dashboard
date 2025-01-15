import React, { lazy } from "react";
import { useCreateSport, useGetSprots } from "../../../api/sports";
import { Box, Divider } from "@mui/material";
import { gridSpacing } from "../../../config";
import SportForm from "./components/SportForm";
import Grid from "@mui/material/Grid2";
import { sportColumns } from "../../../tables-def/sport";
import Loadable from "../../../components/Loadable";

const TableComponent = Loadable(
  lazy(() => import("../../../components/Table"))
);

const Sports = () => {
  const sports = useGetSprots();
  const createSport = useCreateSport();

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <SportForm
            initialValues={{
              title: "",
            }}
            onSubmit={(values, { resetForm }) => {
              createSport.mutateAsync(values);
              resetForm();
            }}
            loadingButtonProps={{
              loading: createSport.isPending,
            }}
          />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <TableComponent
            data={sports?.data?.data?.sports || []}
            columns={sportColumns}
            state={{
              isLoading: sports.isLoading,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sports;
