import { Box, Typography } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import Screen from "../../../components/Screen";
import { LogoIcon } from "../../../components/Logo";

const Login = () => {
  return (
    <Screen
      title="Login Page"
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "60%", md: "40%" },
            borderRadius: "15px",
            p: 6,
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "calc(20px + 0.15vw)",
                }}
              >
                Welcome Back
              </Typography>
              <LogoIcon logoWidth="35px" />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "calc(20px + 0.15vw)",
              }}
            >
              Login
            </Typography>
          </Box>
          <LoginForm />
        </Box>
      </Box>
    </Screen>
  );
};

export default Login;
