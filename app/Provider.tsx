"use client";
import React, { ReactNode } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../config/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    // <DynamicContextProvider
    //   settings={{
    //     environmentId: "22308661-4267-46ca-b673-65a81ce3b552",
    //     walletConnectors: [EthereumWalletConnectors],
    //   }}
    // >
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
        {/* </RainbowKitProvider> */}
      </QueryClientProvider>
    </WagmiProvider>
    // </DynamicContextProvider>
  );
};

export default Provider;
