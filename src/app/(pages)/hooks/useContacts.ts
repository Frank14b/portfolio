import { sendEmail } from "@/common/services";
import { EMAIL_TYPE } from "@/common/types";
import { notification } from "@/utils/notifications";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

const useContacts = () => {
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const proceedGetInTouch = useCallback(
    async ({ email }: { email: string }) => {
      if (!email) return;

      setIsLoading(true);
      const result = await sendEmail({
        subject: "Test Message Frank Fontcha",
        message: {
          isHtml: true,
          content: "<p>Test Message Frank Fontcha</p>",
        },
        type: EMAIL_TYPE.CONTACT,
        to: email,
      });

      if (result) {
        notification.notifySuccess("Successfully Send.");
      }

      setIsLoading(false);

      return result;
    },
    [router, setIsLoading]
  );

  const data: ContactHookDto = {
    isLoading,
    setIsLoading,
    proceedGetInTouch,
  };

  return { ...data };
};

export default useContacts;

export type ContactHookDto = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  proceedGetInTouch: ({ email }: { email: string }) => Promise<string | null>;
};
