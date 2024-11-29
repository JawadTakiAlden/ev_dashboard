import React from "react";
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
import { Survey } from "../../../tables-def/survey";

const DeleteSurvey = ({ survey }: { survey: Survey }) => {
  return (
    <PopupButton
      title="delete Survey"
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
            <DialogTitle>Delete " {survey.title} " confirmation</DialogTitle>
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
              <Button
                onClick={handleClose}
                variant="outlined"
                color={"success"}
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        );
      }}
    />
  );
};

export default DeleteSurvey;
