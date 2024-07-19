import * as yup from "yup";

export const passwordRegex: string =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
export const passwordErrorMessage: string =
  "Password must contains upper, lowercase, number, special char and min 8 digits";

export const SignInFormSchema = () => {
  return yup.object({
    email: yup
      .string()
      .email("Provide a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(new RegExp(passwordRegex), {
        message: passwordErrorMessage,
      })
      .required("Password is required"),
    // rememberMe: yup.boolean(),
  });
};
