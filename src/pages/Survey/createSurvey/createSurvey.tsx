import { Box } from "@mui/material";
import React from "react";
import SurveyForm from "../components/SurveyForm";
import { useParams } from "react-router";

const CreateSurvey = () => {
  const { packageId } = useParams();
  return (
    <Box>
      <SurveyForm
        task="create"
        dir="row"
        initialValues={{
          title: "",
          package_id: parseInt(packageId!),
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </Box>
  );
};

export default CreateSurvey;
