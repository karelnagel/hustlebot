"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import { type AppRouter } from "../server/api/root";
import transformer from "superjson";
import { getBaseUrl } from "~/utils/api";
export const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn();
        await opts.queryClient.invalidateQueries();
      },
    },
  },
});

export const trpcClient = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: () => true,
    }),
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});

export function TRPCProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [client] = useState(() =>
    trpc.createClient({
      transformer,
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
