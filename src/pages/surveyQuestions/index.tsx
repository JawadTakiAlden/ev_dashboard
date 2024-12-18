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
  withActions = true,
}: {
  questions?: SurveyQuestionModel[];
  withActions?: boolean;
}) => {
  return (
    <Box>
      {withActions && <CreateQuestion />}

      <Table
        data={questions}
        columns={surveyQuestionsColumns}
        enableRowActions={withActions}
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
