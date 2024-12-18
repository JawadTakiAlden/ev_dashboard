import { Box, IconButton, Stack, Typography } from "@mui/material";
import SearchOrStartNewChat from "./SearchOrStartNewChat";
import UserChatRow from "./UserChatRow";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const MyChatPeople = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "300px" },
        flexShrink: 0,
        height: "100vh",
        maxHeight: "100vh",
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        p: 0.5,
      }}
    >
      <Stack flexDirection={"row"} gap={1}>
        <IconButton component={Link} to={"/dashboard/home"}>
          <IoArrowBackCircle />
        </IconButton>
        <Typography
          sx={{
            fontSize: "calc(0.15vw + 18px)",
            mb: 1,
            fontWeight: "600",
          }}
        >
          Chats
        </Typography>
      </Stack>
      <SearchOrStartNewChat />
      <Stack
        sx={{
          maxHeight: "calc(100vh - 110px)",
          overflowY: "auto",
        }}
      >
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
        <UserChatRow />
      </Stack>
    </Box>
  );
};

export default MyChatPeople;
