import { Box, Typography } from "@mui/material";
import React from "react";

const JustifyEndMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Typography
        sx={{
          maxWidth: "70%",
          p: 1,
          borderRadius: "10px",
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
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

export default JustifyEndMessage;
