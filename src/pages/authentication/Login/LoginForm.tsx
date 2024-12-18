import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import EyeIcon from "../../../components/EyeIcon";
import useLogin from "../../../api/useLogin";

interface LoginVlaues {
  email: string;
  password: string;
}

const initialValues: LoginVlaues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(7).max(26).required().label("Password"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const login = useLogin();
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: LoginVlaues) => {
          login.mutate(values);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
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
                <FormHelperText>{errors.email}</FormHelperText>
              )}
            </FormControl>
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
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    <EyeIcon show={showPassword} />
                  </IconButton>
                }
              />
              {!!errors.password && !!touched.password && (
                <FormHelperText>{errors.password}</FormHelperText>
              )}
            </FormControl>
            <LoadingButton
              loading={login.isPending}
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
