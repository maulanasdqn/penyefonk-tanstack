import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, ReactElement } from "react";

export const ReactQueryProvider: FC<PropsWithChildren> = (props): ReactElement => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
