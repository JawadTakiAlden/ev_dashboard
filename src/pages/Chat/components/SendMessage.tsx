import React from "react";
import Grid from "@mui/material/Grid2";
import { IconButton, TextField } from "@mui/material";
import { FaFileUpload } from "react-icons/fa";

const SendMessage = () => {
  return (
    <Grid container gap={1} alignItems={"center"}>
      <Grid size="grow">
        <TextField
          fullWidth
          placeholder="type a message"
          sx={{
            "& .MuiFilledInput-input": {
              paddingTop: "15px",
            },
          }}
          variant="filled"
        />
      </Grid>
      <Grid size="auto">
        <IconButton
          sx={{
            borderRadius: "8px",
          }}
          color="default"
        >
          <FaFileUpload />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SendMessage;
