import React, { useEffect } from "react";
import { useSidebar } from "../../store/sidebarStore";
import MiniDrawerStyled from "./MiniDrawerStyled";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { drawerWidth } from "../../config";
import SidebarHeader from "./SidebarHeader";
import NavItemsRenderer from "../NavItems";
import { MenuItemObject } from "../../menu-items";

const Sidebar = ({ items = [] }: { items?: MenuItemObject[] }) => {
  const { open, handelClose, handelOpen } = useSidebar();
  const theme = useTheme();
  const matchDonwMD = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    if (matchDonwMD) {
      handelClose();
    } else {
      handelOpen();
    }
  }, [handelClose, handelOpen, matchDonwMD]);

  return !matchDonwMD ? (
    <Box component={"nav"}>
      <MiniDrawerStyled
        anchor={"left"}
        variant="permanent"
        open={open}
        onClose={handelClose}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarHeader />
        <Box
          sx={{
            maxWidth: "100%",
          }}
        >
          <NavItemsRenderer items={items} />
        </Box>
      </MiniDrawerStyled>
    </Box>
  ) : (
    <Drawer
      anchor={"left"}
      open={open}
      variant="temporary"
      onClose={handelClose}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          borderRight: "1px solid",
          borderRightColor: "divider",
          backgroundImage: "none",
          boxShadow: "inherit",
        },
      }}
    >
      <Box role="presentation" onClick={handelClose}>
        <SidebarHeader />
        <Box
          sx={{
            maxWidth: "100%",
          }}
        >
          <NavItemsRenderer items={items} />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
