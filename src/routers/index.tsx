import { MainLayout } from "@/layouts";
import { HomePage, AboutPage } from "@/pages";
import { RootRoute, Route, Router } from "@tanstack/react-router";

const rootRoute = new RootRoute({
  component: MainLayout,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
