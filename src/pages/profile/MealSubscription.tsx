import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { DietSubscription } from "../../tables-def/user-profile";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import MainCard from "../../components/MainCard";
import MealPlanCard from "../MealPlans/components/MealPlanCard";

const Subscription: React.FC<ListChildComponentProps<DietSubscription[]>> = ({
  index,
  style,
  data,
}) => {
  const subscription = data[index];

  return (
    <div
      style={{
        ...style,
        width: "300px",
      }}
      key={index}
    >
      <MainCard border={false} cardContent={false} sx={{ p: 0 }}>
        <Box
          sx={{
            p: 1,
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            Subscription Information :{" "}
          </Typography>
          <Typography>Start : {subscription.start_date}</Typography>
          <Typography>End : {subscription.end_date}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            Address :{" "}
          </Typography>
          {subscription.address.city && (
            <Typography>City : {subscription.address.city}</Typography>
          )}

          {subscription.address.street && (
            <Typography>Street : {subscription.address.street}</Typography>
          )}
          {subscription.address.building && (
            <Typography>Building : {subscription.address.building}</Typography>
          )}
          {subscription.address.address_label && (
            <Typography>
              Address : {subscription.address.address_label}
            </Typography>
          )}
          {subscription.address.postal_code && (
            <Typography>
              Postal code : {subscription.address.postal_code}
            </Typography>
          )}
          {subscription.address.state && (
            <Typography>State : {subscription.address.state}</Typography>
          )}
          {subscription.address.address_label && (
            <Typography>
              Address : {subscription.address.address_label}
            </Typography>
          )}
          <Divider sx={{ my: 1 }} />
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            Delivery Time :
          </Typography>
          <Typography>{subscription.delivery_time.title}</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <MealPlanCard plan={subscription.meal_plan} />
      </MainCard>
    </div>
  );
};

const MealSubscription = ({
  mealsSubscription,
}: {
  mealsSubscription: DietSubscription[];
}) => {
  return (
    <Box>
      <SectionTitle>Meal Subscription</SectionTitle>
      <List
        itemCount={mealsSubscription?.length || 0}
        itemSize={310}
        height={400}
        width={1000}
        itemData={mealsSubscription || []}
        layout="horizontal"
        style={{
          width: "100%",
        }}
      >
        {Subscription}
      </List>
    </Box>
  );
};

export default MealSubscription;
