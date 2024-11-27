import React from "react";
import { MenuItemObject } from "../../menu-items";
import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import NavItemsRenderer from ".";
import { MdExpandMore } from "react-icons/md";

const CollapseItem = ({ item }: { item: MenuItemObject }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      slotProps={{ transition: { unmountOnExit: true } }}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
        [`&.${accordionClasses.root}`]: {
          ":before": {
            display: "none",
          },
        },
      }}
    >
      <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
        {item.title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "transparent",
          p: 0,
        }}
      >
        <NavItemsRenderer items={item.children!} />
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapseItem;
