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
                    ingredients: values.ingredients.map((ty) => ty.id),
                  };
                  const mealFormData = new FormData();
                  mealFormData.append("name", mutatedValues.name);
                  mealFormData.append("description", mutatedValues.description);
                  mealFormData.append("carb", values.carb.toString());
                  mutatedValues.ingredients.map((ingre, i) =>
                    mealFormData.append(`ingredients[${i}]`, ingre.toString())
                  );
                  mutatedValues.types.map((type, i) =>
                    mealFormData.append(`types[${i}]`, type.toString())
                  );
                  mealFormData.append(
                    "calories",
                    mutatedValues.calories.toString()
                  );
                  mealFormData.append("fats", mutatedValues.fats.toString());
                  mealFormData.append("fiber", mutatedValues.fiber.toString());
                  mealFormData.append(
                    "protein",
                    mutatedValues.protein.toString()
                  );
                  mutatedValues.images.map((image) =>
                    mealFormData.append("images", image)
                  );
                  await createMeal.mutateAsync(mealFormData);
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
                  images: [],
                  fats: 0,
                  fiber: 0,
                  carb: 0,
                  ingredients: [],
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
