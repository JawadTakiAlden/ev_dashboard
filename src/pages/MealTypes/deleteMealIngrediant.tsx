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
              Delete " {mealIngrediant.title} " confirmation
            </DialogTitle>
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
