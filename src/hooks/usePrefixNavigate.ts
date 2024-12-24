import { prefixPath } from "@/utils";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const usePrefixNavigate = () => {
  const { push, back, forward, refresh, replace } = useRouter();

  const goToHome = useCallback(() => {
    return push(prefixPath.home);
  }, [push]);

  const goBack = useCallback(() => {
    return back();
  }, [back]);

  const goForward = useCallback(() => {
    return forward();
  }, [forward]);

  const refreshPage = useCallback(() => {
    return refresh();
  }, [refresh]);

  const replaceHref = useCallback(
    (href: string) => {
      return replace(href);
    },
    [replace]
  );

  return {
    goToHome,
    goBack,
    goForward,
    refreshPage,
    replaceHref,
  };
};
