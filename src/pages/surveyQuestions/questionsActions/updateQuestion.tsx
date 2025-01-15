import React from "react";
import { SurveyDataModel } from "../../../tables-def/surveyQuestions";
import PopupButton from "../../../components/PopupButton";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import QuestionForm from "../components/QuestionForm";
import { CiEdit } from "react-icons/ci";
import { useUpdateQuestion } from "../../../api/surveys";

const UpdateQuestion = ({ question }: { question: SurveyDataModel }) => {
  const updateQuestion = useUpdateQuestion();
  return (
    <PopupButton
      title="Delete question"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <IconButton onClick={handleOpen} color="warning">
            <CiEdit />
          </IconButton>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Update Question</DialogTitle>
            <DialogContent>
              <DialogContentText>
                update your question easily or click away to cancel
              </DialogContentText>
              <QuestionForm
                task="update"
                onSubmit={(values) => {
                  updateQuestion.mutateAsync({ id: question.id, data: values });
                  handleClose();
                }}
                initialValues={{
                  ...question,
                  choices: question.choices?.map((choice) => choice.text),
                }}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default UpdateQuestion;
