import * as yup from "yup";

export const ContactFormSchema = () => {
  return yup.object({
    name: yup
      .string()
      .min(2, "Must be at least 2 characters")
      .required("Name is required"),
    email: yup.string().email("Provide a valid email").required("Email is required"),
    interest: yup
      .string()
      .oneOf(["design", "dev", "it-support", "analysis", "others"])
      .required("Interest is required"),
    phone: yup.string(),
    message: yup
      .string()
      .min(10, "Must be at least 10 characters")
      .required("Message note is required"),
  });
};
