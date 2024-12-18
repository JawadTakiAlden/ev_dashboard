import { alpha, Box } from "@mui/material";
import PricingForm from "./PricingForm";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import Table from "../../../components/Table";
import {
  Pricing as PriceModel,
  pricingColumns,
} from "../../../tables-def/packages";
import DeleteTypography from "../../../components/DeleteTypography";
import { useCreatePrice } from "../../../api/packages";
import { useParams } from "react-router";

const Pricing = ({
  withActions = true,
  pricing,
  isLoading = false,
}: {
  withActions?: boolean;
  pricing: PriceModel[];
  isLoading?: boolean;
}) => {
  const createPrice = useCreatePrice();
  const { packageId } = useParams();
  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        {withActions && (
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
                number_of_days: 0,
                package_id: packageId!,
              }}
              loadingButtonProps={{
                loading: createPrice.isPending,
              }}
              onSubmit={(values) => {
                createPrice.mutate(values);
              }}
            />
          </Grid>
        )}
        <Grid size={12}>
          <Table
            enablePagination={false}
            renderBottomToolbar={false}
            data={pricing || []}
            state={{
              isLoading: isLoading,
            }}
            columns={pricingColumns(withActions)}
            enableRowActions={false}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
