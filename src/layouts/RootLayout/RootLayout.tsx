import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import useMount from "../../hooks/useMount";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ScrollOnNavigate from "../../components/ScrollOnNavigate";

const RootLayout = () => {
  const mount = useMount();

  if (!mount) {
    return <ProgressBar />;
  }

  return (
    <Box>
      <ScrollOnNavigate>
        <Outlet />
      </ScrollOnNavigate>
    </Box>
  );
};

export default RootLayout;
