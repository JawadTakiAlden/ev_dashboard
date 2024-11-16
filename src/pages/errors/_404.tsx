import { Box, Button, Typography } from "@mui/material";
import Logo, { LogoIcon } from "../../components/Logo";
import { useNavigate } from "react-router";

const NotFound404 = () => {
  const navigate = useNavigate();
  const redirectHandeler = () => {
    navigate("/auth/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Logo logoWidth="100px" textLogowidth="200px" mb={3} />
      <Typography
        sx={{
          fontSize: "calc(30px + 1vw)",
          letterSpacing: "5px",
          "& .o": {
            color: "primary.main",
          },
        }}
      >
        4<span className="o">0</span>4
      </Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        Ops , your out of the gym <LogoIcon logoWidth="30px" />
      </Typography>
      <Button onClick={redirectHandeler} variant="outlined">
        Go Gym
      </Button>
    </Box>
  );
};

export default NotFound404;
