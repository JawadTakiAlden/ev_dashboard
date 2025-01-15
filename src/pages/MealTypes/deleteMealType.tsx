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
import useDeleteType from "../../api/type/useDeleteType";
import { LoadingButton } from "@mui/lab";

const DeleteMealType = ({ mealType }: { mealType: MealType }) => {
  const deleteType = useDeleteType();
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
            <DialogTitle>Confirm Deletion of "{mealType.title}"</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the meal type "{mealType.title}
                "? This action cannot be undone and will permanently remove the
                meal type from the system.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color={"error"}>
                Cancel
              </Button>
              <LoadingButton
                onClick={async () => {
                  await deleteType.mutateAsync(mealType.id);
                  handleClose();
                }}
                loading={deleteType.isPending}
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

export default DeleteMealType;
