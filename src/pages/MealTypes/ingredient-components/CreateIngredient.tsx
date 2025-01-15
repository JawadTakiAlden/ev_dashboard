import React from "react";
import PopupButton from "../../../components/PopupButton";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import MealIngrediantForm from "../components/MealIngrediantForm";
import { useCreateIngredient } from "../../../api/ingredients";

const CreateIngredient = () => {
  const createIngredient = useCreateIngredient();
  return (
    <PopupButton
      title="Create Meal Ingredient"
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Create New Meal Ingredient</DialogTitle>
            <DialogContent>
              <MealIngrediantForm
                onSubmit={(values) => {
                  try {
                    createIngredient.mutateAsync(values);
                    handleClose();
                  } catch (err) {
                    console.log("error");
                  }
                }}
                initialValues={{
                  title: "",
                  image: null,
                }}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default CreateIngredient;
