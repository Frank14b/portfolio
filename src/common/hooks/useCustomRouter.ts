import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

const useCustomRouter = () => {
  //
  const router = useRouter();
  const pathname = usePathname();

  const push = useCallback(
    (link: string, options?: NavigateOptions | undefined) => {
      if (pathname != link) {
        // setNavigationChange?.("start");
      }
      router.push(link, options);
    },
    [router, pathname]
  );

  const replace = useCallback(
    (link: string, options?: NavigateOptions | undefined) => {
      if (pathname != link) {
        // setTimeout(() => {
        //   setNavigationChange?.("stop");
        // }, 3000);
      }
      router.replace(link, options);
    },
    [router, pathname]
  );

  const customRouter = { push, replace, pathname };

  return customRouter;
};

export default useCustomRouter;
