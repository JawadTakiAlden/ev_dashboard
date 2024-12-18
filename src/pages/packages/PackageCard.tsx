import React, { useEffect, useState } from "react";
import { Package, Pricing } from "../../tables-def/packages";
import { alpha, Box, Button, Stack, Typography } from "@mui/material";
import MainCard from "../../components/MainCard";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../providers/AuthProvider";

const PackageCard = ({ packageRow }: { packageRow: Package }) => {
  const [selectedPricing, setSelectedPricing] = useState<Pricing | null>(null);
  const { base } = useAuthContext();
  useEffect(() => {
    if (packageRow?.pricings?.length! > 0) {
      setSelectedPricing(packageRow?.pricings![0]);
    }
  }, [packageRow?.pricings]);

  return (
    <MainCard>
      <Typography
        sx={{
          mb: 2,
          py: 1,
          position: "relative",
          width: "fit-content",
          "::after": {
            content: "''",
            position: "absolute",
            width: "30%",
            left: "5px",
            height: "4px",
            borderRadius: "4px",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.2),
            bottom: 0,
          },
        }}
        variant="h4"
      >
        {packageRow.name}
      </Typography>
      <Typography
        sx={{
          my: 1,
          color: "primary.main",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {packageRow.type}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
        }}
      >
        {packageRow.description}
      </Typography>
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

      <Stack flexDirection={"row"} mt={3} justifyContent={"flex-end"}>
        <Button
          variant="outlined"
          component={Link}
          to={`/${base}/dashboard/packages/${packageRow.id}`}
          sx={{
            ":hover": {
              boxShadow: (theme) => `-3px -3px ${theme.palette.primary.main}`,
            },
          }}
        >
          Manage
        </Button>
      </Stack>
    </MainCard>
  );
};

export default PackageCard;
