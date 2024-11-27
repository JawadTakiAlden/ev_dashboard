import React from "react";
import PopupButton from "../../components/PopupButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { MdDeleteSweep } from "react-icons/md";
import { MealType } from "../../tables-def/meal-types";

const DeleteMealType = ({ mealType }: { mealType: MealType }) => {
  return (
    <PopupButton
      title="delete meal type"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <Tooltip title="delete meal type">
            <IconButton onClick={handleOpen} color={"error"}>
              <MdDeleteSweep />
            </IconButton>
          </Tooltip>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Delete " {mealType.title} " confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                hic a quos modi tempora eveniet ea numquam similique facere
                nihil. Eius in eum sed deserunt quae corporis adipisci nisi
                minima?
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

export default DeleteMealType;
