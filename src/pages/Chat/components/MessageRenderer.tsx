import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { IoArrowBackCircle } from "react-icons/io5";
import JustifyStartMessage from "./JustifyStartMessage";
import JustifyEndMessage from "./JustifyEndMessage";
import { useEffect, useRef } from "react";
import SendMessage from "./SendMessage";
import { useChat } from "../Store/chatStore";

const MessageRenderer = ({ user }: { user: any }) => {
  const { selectUser } = useChat();
  const messageContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messageContainerRef.current?.scrollTo({
      top: messageContainerRef.current.scrollHeight,
    });
  });

  if (user === null) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" textAlign={"center"} mb={1}>
          Fitness chat
        </Typography>
        <Typography
          sx={{
            color: "grey.600",
          }}
          variant="h5"
          textAlign={"center"}
        >
          send and recive messages easily with height performance chat app ,
          select user and start
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundImage: (theme) =>
          `radial-gradient(${alpha(
            theme.palette.divider,
            0.07
          )} 1px, transparent 1px)`,
        backgroundSize: `10px 10px`,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          px: 2,
          justifyContent: "space-between",
          backgroundColor: (theme) => theme.palette.background.default,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Avatar />
          <Typography>{user.name}</Typography>
        </Stack>

        <IconButton
          onClick={() => selectUser(null)}
          sx={{
            display: { md: "none" },
          }}
        >
          <IoArrowBackCircle />
        </IconButton>
      </Box>
      <Box
        ref={messageContainerRef}
        sx={{
          height: "calc(100vh - 115px)",
          overflowY: "auto",
          py: 1,
          px: 0.5,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <JustifyStartMessage />
        <JustifyEndMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
        <JustifyEndMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
        <JustifyStartMessage />
      </Box>
      <Box
        sx={{
          height: "45px",
          backdropFilter: "blur(1px)",
          pt: 0,
        }}
      >
        <SendMessage />
      </Box>
    </Box>
  );
};

export default MessageRenderer;
