import React from "react";
import {
  useChangeOrderStatus,
  useGetMealOrdersDetail,
} from "../../../api/meal-orders";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import MealCard from "../../meals/components/MealCard";
import { LoadingButton } from "@mui/lab";

const InfoTypography = styled(Typography)(({ theme }) => ({
  fontSize: "calc(16px + 0.05vw)",
  fontWeight: "400",
  color: theme.palette.text.secondary,
  textTransform: "capitalize",
  "& > span": {
    color: theme.palette.text.primary,
    fontWeight: "600",
    mb: 0.5,
  },
}));

const MealOrderDetail = () => {
  const mealOrder = useGetMealOrdersDetail();
  const data = mealOrder.data?.data;
  const chnageOrderStatus = useChangeOrderStatus();

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        {/* Order Details Section */}
        <Grid size={12} mb={2}>
          <Typography
            sx={{
              fontSize: "calc(22px + 0.1vw)",
              fontWeight: "500",
              letterSpacing: "1px",
              mb: 1,
            }}
          >
            Order Status
          </Typography>
          <Stack flexDirection={"row"} alignItems={"center"} gap={"5px"}>
            <Tooltip title="the order not start yet">
              <LoadingButton
                onClick={() => {
                  chnageOrderStatus.mutate({
                    orderId: data?.id!,
                    orderStatus: "listed",
                  });
                }}
                disabled={chnageOrderStatus.isPending}
                color="inherit"
                variant="outlined"
                sx={{
                  flexGrow: data?.status === "listed" ? 2 : 1,
                  transition: "0.2s",
                }}
              >
                Listed
              </LoadingButton>
            </Tooltip>
            <Divider sx={{ flexGrow: 0.5 }} />
            <Tooltip title="you are start preparing the order">
              <LoadingButton
                onClick={() => {
                  chnageOrderStatus.mutate({
                    orderId: data?.id!,
                    orderStatus: "pending",
                  });
                }}
                disabled={chnageOrderStatus.isPending}
                color="warning"
                variant="outlined"
                sx={{
                  flexGrow: data?.status === "pending" ? 2 : 1,
                  transition: "0.2s",
                }}
              >
                Pending
              </LoadingButton>
            </Tooltip>
            <Divider sx={{ flexGrow: 0.5 }} />
            <Tooltip title="the order done and ready to be delevired">
              <LoadingButton
                onClick={() => {
                  chnageOrderStatus.mutate({
                    orderId: data?.id!,
                    orderStatus: "done",
                  });
                }}
                disabled={chnageOrderStatus.isPending}
                color="primary"
                variant="outlined"
                sx={{
                  flexGrow: data?.status === "done" ? 2 : 1,
                  transition: "0.2s",
                }}
              >
                Done
              </LoadingButton>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography variant="h3" mb={1}>
              Order Details
            </Typography>
            <InfoTypography>
              <span>Order ID</span>: #{data?.id}
            </InfoTypography>
            <InfoTypography>
              <span>Order Date</span>:{" "}
              {new Date(data?.order_date || "").toLocaleDateString()}
            </InfoTypography>
            <InfoTypography>
              <span>Status</span>: {data?.status}
            </InfoTypography>
          </Box>
        </Grid>

        {/* Customer Information Section */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography variant="h3" mb={1}>
              Customer Information
            </Typography>
            <InfoTypography>
              <span>Name</span>: {data?.user?.name}
            </InfoTypography>
            <InfoTypography>
              <span>Email</span>: {data?.user?.email}
            </InfoTypography>
            <InfoTypography>
              <span>Phone</span>: {data?.user?.phone}
            </InfoTypography>
            <InfoTypography>
              <span>Gender</span>: {data?.user?.gender}
            </InfoTypography>
            <InfoTypography>
              <span>Goal</span>: {data?.user?.goal}
            </InfoTypography>
            <InfoTypography>
              <span>Age</span>: {data?.user?.age}
            </InfoTypography>
            <InfoTypography>
              <span>Dietary Preferences</span>:{" "}
              {data?.user?.dietary_preferences}
            </InfoTypography>
          </Box>
        </Grid>

        {/* Subscription Section */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography variant="h3" mb={1}>
              Subscription
            </Typography>
            <InfoTypography>
              <span>Plan</span>: {data?.subscription?.meal_plan?.title}
            </InfoTypography>
            <List>
              <ListItem>
                <ListItemText>
                  Plan Calories: {data?.subscription?.meal_plan?.calories} kcal
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Price: ${data?.subscription?.meal_plan?.price_monthly}/month
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Start Date:{" "}
                  {new Date(
                    data?.subscription?.start_date || ""
                  ).toLocaleDateString()}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  End Date:{" "}
                  {new Date(
                    data?.subscription?.end_date || ""
                  ).toLocaleDateString()}
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Delivery Information Section */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography variant="h3" mb={1}>
              Delivery Information
            </Typography>
            <InfoTypography>
              <span>Address</span>: {data?.subscription?.address?.address_label}
              , {data?.subscription?.address?.street},{" "}
              {data?.subscription?.address?.city},{" "}
              {data?.subscription?.address?.state},{" "}
              {data?.subscription?.address?.postal_code}
            </InfoTypography>
            <InfoTypography>
              <span>Delivery Notes</span>:{" "}
              {data?.subscription?.address?.delivery_notes}
            </InfoTypography>
            <InfoTypography>
              <span>Delivery Time</span>:{" "}
              {data?.subscription?.delivery_time?.title}
            </InfoTypography>
          </Box>
        </Grid>

        {/* Meal Information Section */}
        <Grid size={12}>
          <Typography variant="h3" mb={1}>
            Meals
          </Typography>
          <Stack flexDirection={"row"} flexWrap={"wrap"} gap="8px">
            {data?.meals?.map((meal, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  flexBasis: {
                    xs: "100%",
                    sm: "calc(50% - 8px)",
                    md: "calc(25% - 8px)",
                  },
                  maxWidth: {
                    xs: "100%",
                    sm: "calc(50% - 8px)",
                    md: "calc(25% - 8px)",
                  },
                }}
              >
                <MealCard key={index} meal={meal} />
              </Box>
            ))}
          </Stack>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MealOrderDetail;
