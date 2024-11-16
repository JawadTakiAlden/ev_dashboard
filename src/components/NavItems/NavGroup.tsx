import React from "react";
import { MenuItemObject } from "../../menu-items";
import { Divider, Typography } from "@mui/material";
import NavItemsRenderer from ".";

const NavGroup = ({ item }: { item: MenuItemObject }) => {
  return (
    <>
      <Typography sx={{ color: "grey.600", my: 2, pl: 1 }}>
        {item.title}
      </Typography>
      <NavItemsRenderer items={item.children!} />
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default NavGroup;
