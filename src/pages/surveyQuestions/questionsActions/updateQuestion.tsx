import React from "react";
import { SurveyQuestionModel } from "../../../tables-def/surveyQuestions";
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

const UpdateQuestion = ({ question }: { question: SurveyQuestionModel }) => {
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
      DialogRender={({ props }) => {
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
                  console.log(values);
                }}
                initialValues={{
                  question: question.question,
                  question_image: question.image,
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
