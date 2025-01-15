import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React, { useMemo } from "react";
import FileImagePicker from "../../../components/FileImagePicker";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { LoadingButton } from "@mui/lab";
import { FormLoadingButtonProps } from "../../../tables-def/loadingButtonProps";

interface QuestionFormValues {
  title: string;
  image: string | null | File;
  type: "normal" | "choice";
  choices?: string[];
}

const QuestionForm = ({
  task = "create",
  loadingButtonProps,
  ...formikConfig
}: FormikConfig<QuestionFormValues> & {
  task?: "create" | "update";
} & FormLoadingButtonProps) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    ...formikConfig,
  });

  const memoziedQuestionImage = useMemo(() => {
    return (
      values.image && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            alt="new question"
            src={
              typeof values.image === "string"
                ? values.image
                : URL.createObjectURL(values.image as unknown as MediaSource)
            }
            style={{
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      )
    );
  }, [values.image]);
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel id="type">Question Type</FormLabel>
          <RadioGroup
            value={values.type}
            onChange={handleChange}
            row
            aria-labelledby="type"
            name="type"
            defaultValue="end"
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Normal"
              labelPlacement="end"
            />
            <FormControlLabel
              value="choice"
              control={<Radio />}
              label="Choices"
            />
          </RadioGroup>
        </FormControl>
        <Grid container spacing={gridSpacing} alignItems={"stretch"}>
          <Grid size={"grow"}>
            <FileImagePicker
              title="Question Image"
              containerProps={{
                sx: {
                  height: "100%",
                },
              }}
              onSelectImage={(files) => {
                setFieldValue("image", files?.[0]);
              }}
              name="question_image"
              accept="image/png,image/jpg,image/jpeg"
              id="image"
              onBlur={handleBlur}
              renderContent={() => {
                return (
                  <Box sx={{ mt: 2 }}>
                    <Typography textAlign={"center"} color="primary.main">
                      availabile types : JPG , PNG , JPEG
                    </Typography>
                  </Box>
                );
              }}
            />
            {touched.image && errors.image && (
              <FormHelperText error>{errors.image}</FormHelperText>
            )}
          </Grid>
          <Grid
            size={"auto"}
            sx={{ maxWidth: "200px", maxHeight: "200px", overflowY: "auto" }}
          >
            {memoziedQuestionImage}
          </Grid>
        </Grid>

        <FormControl fullWidth error={Boolean(touched.title && errors.title)}>
          <InputLabel htmlFor="name">Question Title</InputLabel>
          <OutlinedInput
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Question"
            type="text"
          />
          {touched.title && errors.title && (
            <FormHelperText error>{errors.title}</FormHelperText>
          )}
        </FormControl>
        {values.type === "choice" && (
          <Autocomplete
            multiple
            id="tags-filled"
            options={[]}
            defaultValue={values.choices}
            onChange={(e, newVlaue) => {
              setFieldValue("choices", newVlaue);
            }}
            freeSolo
            renderTags={(value: readonly string[], getTagProps) => {
              return value.map((option: string, index: number) => {
                const { key, ...tagProps } = getTagProps({ index });
                return (
                  <Chip
                    variant="outlined"
                    label={option}
                    key={key}
                    {...tagProps}
                  />
                );
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="choices"
                placeholder="body building"
              />
            )}
          />
        )}

        <LoadingButton
          fullWidth
          type="submit"
          variant="outlined"
          {...loadingButtonProps}
        >
          {task} Question
        </LoadingButton>
      </form>
    </Box>
  );
};

export default QuestionForm;
