import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const TESTNET_PRIVATE_KEY = vars.get("TESTNET_PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    mantaTestnet: {
      url: "https://pacific-rpc.sepolia-testnet.manta.network/http",
      accounts: [TESTNET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      mantaTestnet: "random-api-key",
    },
    customChains: [
      {
        network: "mantaTestnet",
        chainId: 3441006,
        urls: {
          apiURL: "https://pacific-explorer.sepolia-testnet.manta.network/api",
          browserURL: "https://pacific-explorer.sepolia-testnet.manta.network",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
