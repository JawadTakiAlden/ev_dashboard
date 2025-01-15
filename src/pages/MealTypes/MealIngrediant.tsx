import React, { lazy, useState } from "react";
import Loadable from "../../components/Loadable";
import { MealTypeVlaue } from "./components/MealTypeForm";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MealIngrediantForm from "./components/MealIngrediantForm";
import { ingrediantColumns } from "../../tables-def/meal-ingrediant";
import { CiEdit } from "react-icons/ci";
import * as yup from "yup";
import {
  useCreateIngredient,
  useGetIngredients,
  useUpdateIngredient,
} from "../../api/ingredients";
import DeleteMealIngrediant from "./deleteMealIngrediant";
import UpdateMealIngredient from "./ingredient-components/UpdateMealIngredient";
import CreateIngredient from "./ingredient-components/CreateIngredient";
const TableComponent = Loadable(lazy(() => import("../../components/Table")));

const MealIngrediant = () => {

  const ingredients = useGetIngredients();

  return (
    <>
    <CreateIngredient />
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
              <UpdateMealIngredient mealIngrediant={row.original} />
              {/* <IconButton
                onClick={() => {
                  setMode("update");
                  setInitialValues(row.original);
                }}
                color="warning"
              >
                <CiEdit />
              </IconButton> */}
            </Stack>
          );
        }}
      />
    </>
  );
};

export default MealIngrediant;
