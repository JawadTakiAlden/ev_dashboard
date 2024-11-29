import React from "react";
import { Survey } from "../../../tables-def/survey";
import MainCard from "../../../components/MainCard";
import { alpha, IconButton, Stack, Typography } from "@mui/material";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import DeleteSurvey from "../../Survey/components/DeleteSurvey";

const SurveyCard = ({ survey }: { survey: Survey }) => {
  return (
    <MainCard>
      <Typography
        sx={{
          mb: 2,
          py: 1,
          position: "relative",
          width: "fit-content",
          "::after": {
            content: "''",
            position: "absolute",
            width: "30%",
            left: "5px",
            height: "4px",
            borderRadius: "4px",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.2),
            bottom: 0,
          },
        }}
        variant="h4"
      >
        {survey.title}
      </Typography>
      <Stack flexDirection={"row"} gap={1}>
        <IconButton component={Link} to={`survey/${survey.id}`} color={"info"}>
          <IoMdInformationCircle />
        </IconButton>
        <DeleteSurvey survey={survey} />
        <IconButton color={"warning"}>
          <MdModeEditOutline />
        </IconButton>
      </Stack>
    </MainCard>
  );
};

export default SurveyCard;
