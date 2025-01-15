import { Box, Link, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../providers/AuthProvider";
import MainCard from "../../components/MainCard";
import SectionTitle from "../../components/SectionTitle";
import { Link as BaseLink } from "react-router-dom";
import { FitnessSubscription as FitnessSubscriptionModel } from "../../tables-def/user-profile";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

const InformationTypography = styled(Typography)(() => ({
  fontSize: "calc(18px + 0.02vw)",
}));

const Subscription: React.FC<
  ListChildComponentProps<FitnessSubscriptionModel[]>
> = ({ index, style, data }) => {
  const subscription = data[index];
  const { base } = useAuthContext();

  return (
    <div
      style={{
        ...style,
        width: "300px",
      }}
      key={index}
    >
      <MainCard border={false}>
        <SectionTitle>Subscription Plan</SectionTitle>
        <Stack gap="10px">
          <InformationTypography>
            Package :{" "}
            <Link
              component={BaseLink}
              to={`/${base}/dashboard/packages/${subscription.package.id}`}
            >
              {subscription.package.name}
            </Link>
          </InformationTypography>
          <InformationTypography>
            Price :{" "}
            <Link
              component={BaseLink}
              to={`/${base}/dashboard/packages/${subscription.package.id}`}
            >
              {subscription?.pricing?.title}
            </Link>
          </InformationTypography>
          <InformationTypography>
            Subscriped at : {subscription.start_date}
          </InformationTypography>
          <InformationTypography>
            Experid On : {subscription.end_date}
          </InformationTypography>
          <InformationTypography>
            the player should be renew after {subscription.days_left} days
          </InformationTypography>
        </Stack>
      </MainCard>
    </div>
  );
};

const FitnessSubscriptionList = ({ data }: { data: any[] }) => {
  return (
    <Box>
      <SectionTitle>Fitness Subscription</SectionTitle>
      <List
        itemCount={data?.length || 0}
        itemSize={310}
        height={400}
        width={1000}
        itemData={data}
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

export default FitnessSubscriptionList;
