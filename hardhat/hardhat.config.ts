import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const TESTNET_PRIVATE_KEY = vars.get("TESTNET_PRIVATE_KEY");
const BSCSCAN_API_KEY = vars.get("BSCSCAN_API_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    bscTestnet: {
      url: `https://bnb-testnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [TESTNET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: BSCSCAN_API_KEY,
    },
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
