import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import useSignIn from "../hooks/useSignIn";
import { InputField } from "../ui-elements";

export function SignInFormDialogComponent({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  //
  const { formId, isLoading, handleSubmit, proceedSubmitForm } = useSignIn();

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form onSubmit={handleSubmit(proceedSubmitForm)}>
            <CardBody className="flex flex-col">
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Sign In.
              </Typography>
              <Typography className="mt-4" variant="h6">
                Your Email
              </Typography>
              <InputField
                data={{
                  formId,
                  name: "email",
                  title: "Email",
                  placeholder: "",
                }}
              />
              <Typography className="mt-4" variant="h6">
                Your Password
              </Typography>
              <InputField
                data={{
                  formId,
                  name: "password",
                  title: "Password",
                  placeholder: "",
                }}
              />
              <div className="-ml-2.5 mt-4">
                <Checkbox crossOrigin={""} label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                disabled={isLoading}
                type="submit"
                className="bg-primaryBlue"
                fullWidth
              >
                Sign In
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
