import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { lazy, useState } from "react";
import MealTypeForm, { MealTypeVlaue } from "./components/MealTypeForm";
import Loadable from "../../components/Loadable";
import { mealTypesColumns } from "../../tables-def/meal-types";
import DeleteMealType from "./deleteMealType";
import { CiEdit } from "react-icons/ci";
import * as yup from "yup";
import useGetTypes from "../../api/type/useGetTypes";
import useCreateType from "../../api/type/useCreateType";
import useUpdateType from "../../api/type/useUpdateType";

const TableComponent = Loadable(lazy(() => import("../../components/Table")));

const MealType = () => {
  const [initailValues, SetInitialValues] = useState<MealTypeVlaue>({
    title: "",
  });

  const [mode, setMode] = useState<"create" | "update">("create");

  const types = useGetTypes();
  const createType = useCreateType();
  const updateType = useUpdateType();

  return (
    <>
      <Typography variant="h4" mb={2} sx={{ textTransform: "capitalize" }}>
        {mode} Meal Type
      </Typography>
      <MealTypeForm
        task={mode}
        validationSchema={yup.object().shape({
          title: yup
            .string()
            .max(255)
            .required()
            .label("meal ingrediant title"),
        })}
        initialValues={initailValues}
        loadingButtonProps={{
          loading: createType.isPending || updateType.isPending,
        }}
        onSubmit={async (values) => {
          if (mode === "create") {
            await createType.mutateAsync(values);
          } else if (mode === "update") {
            await updateType.mutateAsync(values);
          }
          SetInitialValues({ title: "" });
          setMode("create");
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
        data={types?.data?.data || []}
        columns={mealTypesColumns}
        enableRowActions
        state={{
          isLoading: types.isLoading,
        }}
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

export default MealType;
