import React, { lazy, useState } from "react";
import Loadable from "../../components/Loadable";
import { MealTypeVlaue } from "./components/MealTypeForm";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MealIngrediantForm from "./components/MealIngrediantForm";
import {
  ingrediantColumns,
  mealIngredients,
} from "../../tables-def/meal-ingrediant";
import DeleteMealType from "./deleteMealType";
import { CiEdit } from "react-icons/ci";
import * as yup from "yup";
import {
  useCreateIngredient,
  useDeleteIngredient,
  useGetIngredients,
  useUpdateIngredient,
} from "../../api/ingredients";
import DeleteMealIngrediant from "./deleteMealIngrediant";
const TableComponent = Loadable(lazy(() => import("../../components/Table")));

const MealIngrediant = () => {
  const [initailValues, setInitialValues] = useState<MealTypeVlaue>({
    title: "",
  });

  const [mode, setMode] = useState<"create" | "update">("create");

  const ingredients = useGetIngredients();
  const createIngredient = useCreateIngredient();
  const updateIngreidnet = useUpdateIngredient();

  return (
    <>
      <Typography variant="h4" mb={2} sx={{ textTransform: "capitalize" }}>
        {mode} Meal Ingredient
      </Typography>
      <MealIngrediantForm
        task={mode}
        validationSchema={yup.object().shape({
          title: yup
            .string()
            .max(255)
            .required()
            .label("meal ingrediant title"),
        })}
        initialValues={initailValues}
        onSubmit={(values) => {
          if (mode === "create") {
            createIngredient.mutate(values);
          } else {
            updateIngreidnet.mutate({ data: values, id: initailValues.id! });
          }
          setInitialValues({ title: "" });
          setMode("create");
        }}
      />
      {mode === "update" && (
        <Button
          onClick={() => {
            setInitialValues({ title: "" });
            setMode("create");
          }}
          color="inherit"
          variant="outlined"
        >
          Cancel Update
        </Button>
      )}
      <TableComponent
        data={ingredients?.data?.data || []}
        columns={ingrediantColumns}
        enableRowActions
        state={{
          isLoading: ingredients.isLoading,
        }}
        renderRowActions={({ row }) => {
          return (
            <Stack flexDirection={"row"} gap={2}>
              <DeleteMealIngrediant mealIngrediant={row.original} />
              <IconButton
                onClick={() => {
                  setMode("update");
                  setInitialValues(row.original);
                }}
                color="warning"
              >
                <CiEdit />
              </IconButton>
            </Stack>
          );
        }}
      />
    </>
  );
};

export default MealIngrediant;
