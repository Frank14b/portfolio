import useAppForm from "@/common/hooks/useForm";
import { proceedSignInAsync } from "@/common/services";
import { SignInFormDto } from "@/common/types";
import { SignInFormSchema } from "@/common/validators";
import { notification } from "@/utils/notifications";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

const useSignIn = () => {
  //
  const formId: string = "signIn";
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, reset } = useAppForm({
    id: formId,
    schema: SignInFormSchema(),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const proceedSubmitForm = useCallback(
    async (data: SignInFormDto) => {
      setIsLoading(true);
      const result = await proceedSignInAsync(data);
      if (result) {
        notification.notifySuccess("Authentication completed");
        reset();
      }

      setIsLoading(false);
    },
    [reset]
  );

  const data: SignInHookDto = {
    formId,
    isLoading,
    setIsLoading,
    proceedSubmitForm,
    handleSubmit,
  };

  return { ...data };
};

export default useSignIn;

export type SignInHookDto = {
  formId: string;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  handleSubmit: UseFormHandleSubmit<SignInFormDto>;
  proceedSubmitForm: (data: SignInFormDto) => void;
};
