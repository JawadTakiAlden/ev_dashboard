import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Grid from "@mui/material/Grid2";
import { gridSpacing } from "../../../config";
import { LoadingButton } from "@mui/lab";
import { useCreateNewUser } from "../../../api/users";

const AddUser = () => {
  const createNewUser = useCreateNewUser();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        createNewUser.mutate(values);
      },
    });
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth error={!!errors.name && !!touched.name}>
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                label="Name"
                type="text"
              />
              {!!errors.name && !!touched.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth error={!!errors.email && !!touched.email}>
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="Email"
                type="email"
              />
              {!!errors.email && !!touched.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl
              fullWidth
              error={!!errors.password && !!touched.password}
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label="Password"
                type="password"
              />
              {!!errors.password && !!touched.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth error={!!errors.phone && !!touched.phone}>
              <InputLabel>Phone</InputLabel>
              <OutlinedInput
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                label="Phone"
                type="phone"
              />
              {!!errors.phone && !!touched.phone && (
                <FormHelperText error>{errors.phone}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl>
              <FormLabel id="user-role">Role</FormLabel>
              <RadioGroup
                row
                aria-labelledby="user-role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="coach"
                  control={<Radio />}
                  label="Coach"
                />
                <FormControlLabel
                  value="kitchen_staff"
                  control={<Radio />}
                  label="Kitchen"
                />
              </RadioGroup>
              {!!errors.role && !!touched.role && (
                <FormHelperText error>{errors.role}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={12}>
            <LoadingButton
              type="submit"
              loading={createNewUser.isPending}
              variant="outlined"
            >
              Create user
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddUser;
