import React from "react";
import Table from "../../components/Table";
import {
  SurveyQuestionModel,
  surveyQuestions,
  surveyQuestionsColumns,
} from "../../tables-def/surveyQuestions";
import { Box, Stack } from "@mui/material";
import DeleteQuestion from "./questionsActions/deleteQuestion";
import UpdateQuestion from "./questionsActions/updateQuestion";
import CreateQuestion from "./createQuestion/createQuestion";

const SurveyQuestions = ({
  questions = surveyQuestions,
}: {
  questions?: SurveyQuestionModel[];
}) => {
  return (
    <Box>
      <CreateQuestion />
      <Table
        data={questions}
        columns={surveyQuestionsColumns}
        enableRowActions
        renderRowActions={({ row }) => {
          return (
            <Stack flexDirection={"row"} gap={1}>
              <DeleteQuestion question={row.original} />
              <UpdateQuestion question={row.original} />
            </Stack>
          );
        }}
      />
    </Box>
  );
};

export default SurveyQuestions;
