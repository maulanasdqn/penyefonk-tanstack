import { Outlet } from "@tanstack/react-router";
import { FC, PropsWithChildren, ReactElement } from "react";

export const MainTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="flex items-center w-auto justify-center h-screen px-24 overflow-x-auto">
      {children || <Outlet />}
    </main>
  );
};
