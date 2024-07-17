import useAppForm from "@/common/hooks/useForm";
import {
  proceedSaveContactAsync,
  sendGetInTouchEmail,
} from "@/common/services";
import { ContactFormDto } from "@/common/types";
import { ContactFormSchema } from "@/common/validators";
import { notification } from "@/utils/notifications";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import { json } from "stream/consumers";

const useContacts = () => {
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, reset } = useAppForm({
    schema: ContactFormSchema(),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      phone: "",
      message: "",
    },
  });

  const proceedGetInTouch = useCallback(
    async ({ email }: { email: string }) => {
      if (!email) return null;

      setIsLoading(true);

      const result = await sendGetInTouchEmail({
        email,
      });

      if (result.status) {
        notification.notifySuccess("Successfully Send.");
      }else{
        console.log(JSON.stringify(result));
      }

      setIsLoading(false);

      return "-";
    },
    [setIsLoading]
  );

  const proceedSubmitFormContact = useCallback(
    async (data: ContactFormDto) => {
      setIsLoading(true);
      const result = await proceedSaveContactAsync(data);
      if (result) {
        notification.notifySuccess("Thank you for your message!");
        reset();
      }

      setIsLoading(false);
    },
    [reset]
  );

  const data: ContactHookDto = {
    isLoading,
    setIsLoading,
    proceedGetInTouch,
    handleSubmit,
    proceedSubmitFormContact,
  };

  return { ...data };
};

export default useContacts;

export type ContactHookDto = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  proceedGetInTouch: ({ email }: { email: string }) => Promise<string | null>;
  handleSubmit: UseFormHandleSubmit<ContactFormDto>;
  proceedSubmitFormContact: (data: ContactFormDto) => void;
};
