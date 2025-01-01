import { cookieStorage, createStorage, type Config, webSocket } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bscTestnet } from "wagmi/chains";

export const projectId = "91b69d7bece4701b9c9798b72e546b0a";

export const networks = [bscTestnet];

export const metadata = {
  name: "CryptoStreamr",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
  transports: {
    [bscTestnet.id]: webSocket("wss://bsc-testnet-rpc.publicnode.com"),
  },
});

export const config = wagmiAdapter.wagmiConfig;

declare module "wagmi" {
  interface Register {
    config: Config;
  }
}
