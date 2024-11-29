import { Box } from "@mui/material";
import PricingForm from "./PricingForm";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import Table from "../../../components/Table";
import { pricingColumns, pricings } from "../../../tables-def/packages";

const Pricing = () => {
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
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
