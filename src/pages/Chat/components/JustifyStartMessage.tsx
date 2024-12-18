import { Box, Typography } from "@mui/material";

const JustifyStartMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        sx={{
          maxWidth: "70%",
          p: 1,
          borderRadius: "10px",
          backgroundColor: "primary.main",
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        sapiente est beatae laboriosam nesciunt similique culpa, velit,
        perferendis eveniet nihil, ea porro autem perspiciatis accusamus dicta
        ratione. Dolores, quisquam architecto!
      </Typography>
    </Box>
  );
};

export default JustifyStartMessage;
