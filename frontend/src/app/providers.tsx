"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { type State, WagmiProvider } from "wagmi";
import { wagmiAdapter, projectId, metadata } from "@/wagmi";
import { bscTestnet } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";

import { config as wagmiConfig } from "@/wagmi";

import { InfiniteRowModelModule, PaginationModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([InfiniteRowModelModule, PaginationModule]);

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [bscTestnet],
  defaultNetwork: bscTestnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false,
    socials: false,
  },
  themeVariables: {
    "--w3m-accent": "#2563eb",
  },
});

export function Providers(props: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => wagmiConfig);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
