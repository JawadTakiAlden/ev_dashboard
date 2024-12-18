import React from "react";
import PopupButton from "../../../components/PopupButton";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import MealForm from "../components/MealForm";
import { useCreateMeal } from "../../../api/meals";

const CreateMeal = () => {
  const createMeal = useCreateMeal();
  return (
    <PopupButton
      title="Create Meal"
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Create New Meal</DialogTitle>
            <DialogContent>
              <MealForm
                onSubmit={async (values) => {
                  const mutatedValues = {
                    ...values,
                    types: values.types.map((ty) => ty.id),
                  };
                  await createMeal.mutateAsync(mutatedValues);
                  handleClose();
                }}
                loadingButtonProps={{
                  loading: createMeal.isPending,
                }}
                initialValues={{
                  name: "",
                  types: [],
                  calories: 0,
                  description: "",
                  // image_url: null,
                  fats: 0,
                  fiber: 0,
                  carb: 0,
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
