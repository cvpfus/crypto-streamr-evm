import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { CryptoStreamrFactory, CryptoStreamr } from "../typechain-types";

describe("CryptoStreamr contract", function () {
  let signer1: HardhatEthersSigner;
  let signer2: HardhatEthersSigner;
  let cryptoStreamrFactory: CryptoStreamrFactory;
  let cryptoStreamr: CryptoStreamr;

  const username = "testUsername";

  beforeEach(async () => {
    [signer1, signer2] = await ethers.getSigners();

    cryptoStreamrFactory = await ethers.deployContract("CryptoStreamrFactory");
    await cryptoStreamrFactory.deployContract(username);

    const address = (await cryptoStreamrFactory.creatorInfoByAddress(signer1))
      .contractAddress;

    cryptoStreamr = await ethers.getContractAt("CryptoStreamr", address);
  });

  it("should send a tip", async function () {
    await cryptoStreamr
      .connect(signer2)
      .sendTip("test", "hello", { value: 100 });

    const balance = await cryptoStreamr.totalTipsReceived();
    expect(balance).to.equal(100);
  });
});
