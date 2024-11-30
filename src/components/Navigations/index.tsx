import React, { useEffect } from "react";
import { useSidebar } from "../../store/sidebarStore";
import MiniDrawerStyled from "./MiniDrawerStyled";
import { Box, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import { drawerWidth } from "../../config";
import SidebarHeader from "./SidebarHeader";
import NavItemsRenderer from "../NavItems";
import { MenuItemObject } from "../../menu-items";

const Sidebar = ({ items = [] }: { items?: MenuItemObject[] }) => {
  const { open, handelClose, handelOpen } = useSidebar();
  const theme = useTheme();
  const matchDonwLg = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    if (matchDonwLg) {
      handelClose();
    } else {
      handelOpen();
    }
  }, [handelClose, handelOpen, matchDonwLg]);

  return (
    <>
      <Box
        component={"nav"}
        sx={{
          display: { xs: "none", lg: "initial" },
        }}
      >
        <MiniDrawerStyled
          anchor={"left"}
          variant="permanent"
          open={open}
          onClose={handelClose}
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
      <SwipeableDrawer
        anchor={"left"}
        open={open && matchDonwLg}
        variant="temporary"
        onClose={handelClose}
        onOpen={handelOpen}
        swipeAreaWidth={matchDonwLg ? 50 : 0}
        sx={{
          display: { lg: "none" },
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
        <Box
          sx={{ maxWidth: drawerWidth }}
          role="presentation"
          onClick={handelClose}
        >
          <SidebarHeader />
          <Box
            sx={{
              maxWidth: "100%",
            }}
          >
            <NavItemsRenderer items={items} />
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Sidebar;
