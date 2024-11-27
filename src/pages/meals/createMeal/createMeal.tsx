import React from "react";
import PopupButton from "../../../components/PopupButton";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import MealForm from "../components/MealForm";

const CreateMeal = () => {
  return (
    <PopupButton
      title="Create Meal"
      DialogRender={({ props }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Create New Meal</DialogTitle>
            <DialogContent>
              <MealForm
                onSubmit={(values) => {
                  console.log(values);
                }}
                initialValues={{
                  name: "",
                  type: "",
                  calories: 0,
                  description: "",
                  image_url: null,
                  fats: 0,
                  fiber: 0,
                  carbohydrates: 0,
                  protein: 0,
                }}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default CreateMeal;
