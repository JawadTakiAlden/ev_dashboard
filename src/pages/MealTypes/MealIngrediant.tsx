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
const TableComponent = Loadable(lazy(() => import("../../components/Table")));

const MealIngrediant = () => {
  const [initailValues, SetInitialValues] = useState<MealTypeVlaue>({
    title: "",
  });

  const [mode, setMode] = useState<"create" | "update">("create");

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
          console.log(values);
        }}
      />
      {mode === "update" && (
        <Button
          onClick={() => {
            SetInitialValues({ title: "" });
            setMode("create");
          }}
          color="inherit"
          variant="outlined"
        >
          Cancel Update
        </Button>
      )}
      <TableComponent
        data={mealIngredients}
        columns={ingrediantColumns}
        enableRowActions
        renderRowActions={({ row }) => {
          return (
            <Stack flexDirection={"row"} gap={2}>
              <DeleteMealType mealType={row.original} />
              <IconButton
                onClick={() => {
                  setMode("update");
                  SetInitialValues(row.original);
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
