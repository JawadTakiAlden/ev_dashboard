import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { numberOfLines } from "../../../utils/maxLinesNumber";
import useGetGetDarkValue from "../../../utils/useGetGetDarkValue";
import { useChat } from "../Store/chatStore";

const UserChatRow = () => {
  const { getVlaue } = useGetGetDarkValue();
  const { selectUser } = useChat();
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={1}
      sx={{
        cursor: "pointer",
        px: 1,
        py: 2,

        ":hover": {
          backgroundColor: getVlaue("grey.900", "grey.100"),
        },
      }}
      onClick={() => {
        selectUser({
          id: 1,
          name: "jawad taki aldeen",
        });
      }}
    >
      <Box>
        <Avatar />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontWeight: "600",
            letterSpacing: "0.6px",
          }}
        >
          jawad taki aldeen
        </Typography>
        <Typography
          sx={{
            ...numberOfLines(1),
            color: "grey.500",
          }}
        >
          hi gues i want to tell you about something
        </Typography>
      </Box>
    </Stack>
  );
};

export default UserChatRow;
