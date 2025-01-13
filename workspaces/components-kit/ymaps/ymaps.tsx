import { Loader } from "@foundation";
import { lazy, Suspense } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

export const Ymaps = () => {
  const [Component, setComponent] = useState(() => Loader);

  useEffect(() => {
    setComponent(() => lazy(() => import("./ymaps-client")));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};
