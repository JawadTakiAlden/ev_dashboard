import React from "react";
import MainCard from "./MainCard";
import { alpha, Chip, Icon, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AiOutlineFall } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";

interface StatsticCardProps {
  title: string;
  count: string;
  percentage: number;
  color?: "warning" | "info";
  isLoss: boolean;
}

const StatisticCard = ({
  title,
  count,
  percentage,
  isLoss,
  color,
}: StatsticCardProps) => {
  if (!color) {
    color = isLoss ? "warning" : "info";
  }
  return (
    <MainCard
      contentProps={{
        sx: {
          p: 2.25,
        },
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
          {percentage && (
            <Grid>
              <Chip
                icon={
                  isLoss ? (
                    <Icon>
                      <AiOutlineFall />
                    </Icon>
                  ) : (
                    <Icon>
                      <AiOutlineRise />
                    </Icon>
                  )
                }
                label={`${percentage}%`}
                sx={{
                  ml: 1.25,
                  pl: 1,
                  borderRadius: "4px",
                  background: (theme) => alpha(theme.palette[color!].main, 0.2),
                }}
                size="small"
              />
            </Grid>
          )}
        </Grid>
      </Stack>
    </MainCard>
  );
};

export default StatisticCard;
