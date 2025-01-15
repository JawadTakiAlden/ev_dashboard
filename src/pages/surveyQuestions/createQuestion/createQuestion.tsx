import React from "react";
import PopupButton from "../../../components/PopupButton";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import QuestionForm from "../components/QuestionForm";
import { useCreateQuestion } from "../../../api/surveys";
import { useParams } from "react-router";

const CreateQuestion = () => {
  const { surveyId } = useParams();
  const createQuestion = useCreateQuestion();
  return (
    <PopupButton
      title="create question"
      DialogRender={({ handleClose, props }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Create new Question</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Create new question to can add it to any survey in any times
              </DialogContentText>
              <QuestionForm
                onSubmit={(values) => {
                  createQuestion.mutateAsync({
                    ...values,
                    survey_id: surveyId,
                  });
                  handleClose();
                }}
                loadingButtonProps={{
                  loading: createQuestion.isPending,
                }}
                initialValues={{
                  title: "",
                  image: null,
                  type: "normal",
                  choices: [],
                }}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default CreateQuestion;
