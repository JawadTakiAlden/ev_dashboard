import React, { useEffect, useState } from "react";
import { Package, Pricing } from "../../tables-def/packages";
import MainCard from "../../components/MainCard";
import UnderlineHeader from "../../components/UnderlineHeader";
import { Box, Button, Stack, Typography } from "@mui/material";

const MiniPackageCard = ({ packageRow }: { packageRow: Package }) => {
  const [selectedPricing, setSelectedPricing] = useState<Pricing | null>(null);

  useEffect(() => {
    if (packageRow?.pricings?.length! > 0) {
      setSelectedPricing(packageRow?.pricings![0]);
    }
  }, [packageRow?.pricings]);
  return (
    <MainCard border={false}>
      <UnderlineHeader>{packageRow.name}</UnderlineHeader>
      <Stack sx={{ my: 1 }} flexDirection={"row"} gap={2} flexWrap={"wrap"}>
        {packageRow.pricings?.map((price) => (
          <Button
            onClick={() => setSelectedPricing(price)}
            variant={
              selectedPricing?.id === price.id ? "contained" : "outlined"
            }
          >
            {price.title}
          </Button>
        ))}
      </Stack>
      {selectedPricing !== null ? (
        <Box>
          <Typography
            sx={{
              fontSize: "calc(22px + 0.1vw)",
            }}
          >
            {selectedPricing?.number_of_days} / Days
          </Typography>
          <Typography
            sx={{
              fontSize: "calc(22px + 0.1vw)",
              "& .cr": {
                fontSize: "10px",
                color: "text.secondary",
              },
            }}
          >
            <sub className="cr">SAR</sub>
            {selectedPricing?.price}
          </Typography>
        </Box>
      ) : (
        <Typography>no pricing unitl now here</Typography>
      )}
    </MainCard>
  );
};

export default MiniPackageCard;
