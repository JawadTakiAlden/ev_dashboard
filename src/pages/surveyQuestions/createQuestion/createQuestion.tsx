import React from "react";
import PopupButton from "../../../components/PopupButton";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import QuestionForm from "../components/QuestionForm";

const CreateQuestion = () => {
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
                  console.log(values);
                }}
                initialValues={{
                  question: "",
                  question_image: null,
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
