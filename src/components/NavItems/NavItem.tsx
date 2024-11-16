import React, { forwardRef, LegacyRef } from "react";
import { MenuItemObject } from "../../menu-items";
import {
  alpha,
  ListItemButton,
  listItemButtonClasses,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSidebar } from "../../store/sidebarStore";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ item }: { item: MenuItemObject }) => {
  const { open, setSelected } = useSidebar();
  const { pathname } = useLocation();

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }
  let listItemProps: ListItemButtonProps = {
    component: forwardRef((props, ref: LegacyRef<HTMLAnchorElement>) => (
      <Link ref={ref} {...props} to={item.path!} target={itemTarget} />
    )),
  };

  const isSelected = pathname === item.path || pathname.includes(item.path!);

  return (
    <ListItemButton
      {...listItemProps}
      selected={isSelected}
      sx={{
        borderRight: (theme) =>
          isSelected ? `2px solid ${theme.palette.primary.main}` : "none",
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: "transparent !important",
        },
        ":hover": {
          backgroundColor: (theme) =>
            alpha(theme.palette.primary.main, 0.1) + "!important",
        },
      }}
      onClick={() => setSelected(item.id!)}
    >
      {open && (
        <ListItemIcon
          sx={{
            borderRadius: 1.5,
            alignItems: "center",
          }}
        >
          {item.icon}
        </ListItemIcon>
      )}
      {open && (
        <ListItemText
          primary={<Typography variant="h6">{item.title}</Typography>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
