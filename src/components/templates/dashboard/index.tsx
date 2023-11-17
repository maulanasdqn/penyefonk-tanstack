import { Outlet } from "@tanstack/react-router";
import { FC, PropsWithChildren, ReactElement } from "react";

export const DashboardTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="flex items-center w-full justify-center h-screen">
      {children || <Outlet />}
    </main>
  );
};
