"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * Latches the initial value of a query parameter and removes it from the URL.
 */
export const useLatchedQueryParam = (
  paramName: string
): string | undefined => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [value] = useState(() => searchParams.get(paramName) ?? undefined);
  const clearedRef = useRef(false);

  useEffect(() => {
    if (value !== undefined && !clearedRef.current) {
      router.replace(pathname, { scroll: false });
      clearedRef.current = true;
    }
  }, [value, router, pathname]);

  return value;
};
