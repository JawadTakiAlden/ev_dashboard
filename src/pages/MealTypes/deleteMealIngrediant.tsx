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
import { MealIngreadiant } from "../../tables-def/meal-ingrediant";
import { useDeleteIngredient } from "../../api/ingredients";
import { LoadingButton } from "@mui/lab";

const DeleteMealIngrediant = ({
  mealIngrediant,
}: {
  mealIngrediant: MealIngreadiant;
}) => {
  const deleteIngredient = useDeleteIngredient();
  return (
    <PopupButton
      title="delete meal ingrediant"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <Tooltip title="delete meal ingrediant">
            <IconButton onClick={handleOpen} color={"error"}>
              <MdDeleteSweep />
            </IconButton>
          </Tooltip>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>
              Confirm Deletion of "{mealIngrediant.title}"
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the ingredient "
                {mealIngrediant.title}"? This action cannot be undone and will
                permanently remove the ingredient from the system.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color={"error"}>
                Cancel
              </Button>
              <LoadingButton
                onClick={async () => {
                  await deleteIngredient.mutateAsync(mealIngrediant.id);
                  handleClose();
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

export default DeleteMealIngrediant;
