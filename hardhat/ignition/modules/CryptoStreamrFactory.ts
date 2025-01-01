// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CryptoStreamrFactoryModule = buildModule(
  "CryptoStreamrFactoryModule",
  (m) => {
    const contract = m.contract("CryptoStreamrFactory");

    return { contract };
  }
);

export default CryptoStreamrFactoryModule;