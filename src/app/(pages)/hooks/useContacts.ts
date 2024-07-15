import { sendGetInTouchEmail } from "@/common/services";
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

      const result = await sendGetInTouchEmail({
        email,
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
