import { FC, ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";

const { AssetModules } = lazily(() => import("@/modules"));

export const HomePage: FC = (): ReactElement => {
  return (
    <section className="flex flex-col gap-y-4 w-full overflow-x-auto h-full justify-center items-center">
      <Suspense fallback="Loading...">
        <AssetModules />
      </Suspense>
    </section>
  );
};
