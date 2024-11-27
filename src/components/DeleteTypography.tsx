import { alpha, Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

const DeleteTypography = ({
  children,
  ...typographyProps
}: TypographyProps & {
  children: ReactNode | ReactNode[];
}) => {
  typographyProps.variant = typographyProps.variant || "h3";
  typographyProps.sx = {
    textTransform: "capitalize",
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderLeftColor: (theme) => alpha(theme.palette.error.main, 0.3),
    pl: 2,
    ...typographyProps.sx,
  };

  return <Typography {...typographyProps}>{children}</Typography>;
};

export default DeleteTypography;
