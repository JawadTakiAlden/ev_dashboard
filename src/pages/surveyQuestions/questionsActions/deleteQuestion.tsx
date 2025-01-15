import React from "react";
import { SurveyDataModel } from "../../../tables-def/surveyQuestions";
import PopupButton from "../../../components/PopupButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { MdDeleteSweep } from "react-icons/md";
import { useDeleteQuestion } from "../../../api/surveys";
import { LoadingButton } from "@mui/lab";

const DeleteQuestion = ({ question }: { question: SurveyDataModel }) => {
  const deleteQuestion = useDeleteQuestion();
  return (
    <PopupButton
      title="delete question"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <IconButton onClick={handleOpen} color={"error"}>
            <MdDeleteSweep />
          </IconButton>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Delete " {question.title} " confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Delete question will cuse loss it for eveer and its realted data
                like user answers will be lost , this action cant be undo
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color={"error"}>
                Cancel
              </Button>
              <LoadingButton
                onClick={() => {
                  deleteQuestion.mutate(question.id);
                }}
                variant="outlined"
                color={"success"}
              >
                Confirm
              </LoadingButton>
            </DialogActions>
          </Dialog>
        );
      }}
    />
  );
};

export default DeleteQuestion;
