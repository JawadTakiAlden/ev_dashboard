import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import useMount from "../../hooks/useMount";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ScrollOnNavigate from "../../components/ScrollOnNavigate";

const RootLayout = () => {
  const mount = useMount();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") navigate("/admin/dashboard/home");
  }, []);

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
