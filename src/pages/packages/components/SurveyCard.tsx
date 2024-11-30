import React from "react";
import { Survey } from "../../../tables-def/survey";
import MainCard from "../../../components/MainCard";
import { IconButton, Stack } from "@mui/material";
import { IoMdInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import DeleteSurvey from "../../Survey/components/DeleteSurvey";
import UnderlineHeader from "../../../components/UnderlineHeader";

const SurveyCard = ({ survey }: { survey: Survey }) => {
  return (
    <MainCard>
      <UnderlineHeader>{survey.title}</UnderlineHeader>
      <Stack flexDirection={"row"} gap={1}>
        <IconButton component={Link} to={`survey/${survey.id}`} color={"info"}>
          <IoMdInformationCircle />
        </IconButton>
        <DeleteSurvey survey={survey} />
      </Stack>
    </MainCard>
  );
};

export default SurveyCard;
