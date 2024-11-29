import { alpha, Box } from "@mui/material";
import PricingForm from "./PricingForm";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import Table from "../../../components/Table";
import { pricingColumns, pricings } from "../../../tables-def/packages";
import DeleteTypography from "../../../components/DeleteTypography";

const Pricing = () => {
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <DeleteTypography
            sx={{
              borderLeftColor: (theme) =>
                alpha(theme.palette.primary.main, 0.4),
              mb: 2,
            }}
          >
            Pricing Management
          </DeleteTypography>
          <PricingForm
            task="create"
            dir="row"
            initialValues={{
              title: "",
              price: 0,
              numberOfDays: 0,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          />
        </Grid>
        <Grid size={12}>
          <Table
            enablePagination={false}
            renderBottomToolbar={false}
            data={pricings}
            columns={pricingColumns}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
