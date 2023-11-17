import { MainTemplate } from "@/components";
import { TAssetParam } from "@/modules/assets/type";
import { HomePage } from "@/pages";
import { RootRoute, Route, Router } from "@tanstack/react-router";

const rootRoute = new RootRoute({
  component: MainTemplate,
});

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
  validateSearch: (search: Record<string, unknown>): TAssetParam => {
    return {
      search: String(search?.search) || "",
      ids: String(search?.ids) || "",
      limit: Number(search?.limit) ?? 10,
      offset: Number(search?.offset) ?? 0,
    };
  },
  load: ({ search }) => {
    search;
  },
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
