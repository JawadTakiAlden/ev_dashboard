import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { usePushNotification } from "../../../api/notification";

const Notification = () => {
  const pushNotification = usePushNotification();
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        body: "",
      },
      onSubmit: (values) => {
        pushNotification.mutate(values);
      },
      validationSchema: yup.object().shape({
        title: yup
          .string()
          .max(255, "Title should not exceed 255 characters")
          .required("Notification title is required")
          .label("Notification Title"),
        body: yup
          .string()
          .required("Notification body is required")
          .label("Notification Body"),
      }),
    });

  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Send Push Notification
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl
          fullWidth
          margin="normal"
          error={!!touched.title && !!errors.title}
        >
          <InputLabel htmlFor="title">Notification Title</InputLabel>
          <OutlinedInput
            id="title"
            label="Notification Title"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!!touched.title && !!errors.title && (
            <FormHelperText>{errors.title}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          fullWidth
          margin="normal"
          error={!!touched.body && !!errors.body}
        >
          <InputLabel htmlFor="body">Notification Body</InputLabel>
          <OutlinedInput
            id="body"
            label="Notification Body"
            multiline
            minRows={4}
            maxRows={5}
            name="body"
            value={values.body}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!!touched.body && !!errors.body && (
            <FormHelperText>{errors.body}</FormHelperText>
          )}
        </FormControl>
        <LoadingButton
          loading={pushNotification.isPending}
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Notification
        </LoadingButton>
      </form>
    </Box>
  );
};

export default Notification;
