import React from "react";
import { MealIngreadiant } from "../../../tables-def/meal-ingrediant";
import PopupButton from "../../../components/PopupButton";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import MealIngrediantForm from "../components/MealIngrediantForm";
import { useUpdateIngredient } from "../../../api/ingredients";
import { FaEdit } from "react-icons/fa";

const UpdateMealIngredient = ({
  mealIngrediant,
}: {
  mealIngrediant: MealIngreadiant;
}) => {
  const updateMealIngredient = useUpdateIngredient();
  return (
    <PopupButton
      title="Create Meal Ingredient"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <IconButton color="warning" onClick={handleOpen}>
            <FaEdit />
          </IconButton>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Create New Meal Ingredient</DialogTitle>
            <DialogContent>
              <MealIngrediantForm
                onSubmit={(values) => {
                  try {
                    updateMealIngredient.mutateAsync({
                      data: values,
                      id: mealIngrediant.id,
                    });
                    handleClose();
                  } catch (err) {
                    console.log("error");
                  }
                }}
                initialValues={mealIngrediant}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default UpdateMealIngredient;
