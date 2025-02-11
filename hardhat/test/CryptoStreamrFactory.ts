import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { CryptoStreamrFactory } from "../typechain-types";

const username = "testUsername";

describe("CryptoStreamrFactory contract", function () {
  let signer1: HardhatEthersSigner;
  let signer2: HardhatEthersSigner;
  let cryptoStreamrFactory: CryptoStreamrFactory;

  beforeEach(async () => {
    [signer1, signer2] = await ethers.getSigners();

    cryptoStreamrFactory = await ethers.deployContract("CryptoStreamrFactory");
  });

  it("Deployment should assign the username to the owner", async function () {
    await cryptoStreamrFactory.deployContract(username);

    const creator = await cryptoStreamrFactory.creatorInfoByAddress(signer1);
    expect(creator.username).to.equal(username);
  });

  it("Deploying with the same owner should revert", async function () {
    await cryptoStreamrFactory.deployContract(username);

    await expect(
      cryptoStreamrFactory.deployContract(username)
    ).to.be.revertedWith("Contract already deployed");
  });

  it("Deploying with the same username should revert", async function () {
    await cryptoStreamrFactory.deployContract(username);

    await expect(
      cryptoStreamrFactory.connect(signer2).deployContract(username)
    ).to.be.revertedWith("Username already registered");
  });

  it("creators should return the correct creator info", async function () {
    const tx = await cryptoStreamrFactory.deployContract(username);

    const receipt = await tx.wait();
    const event = receipt?.logs
      .map((log) => {
        return cryptoStreamrFactory.interface.parseLog(log);
      })
      .find((e) => e && e.name === "ContractDeployed");

    const creatorInfo = await cryptoStreamrFactory.creatorInfoByAddress(signer1);

    expect(creatorInfo.username).to.equal(username);
    expect(creatorInfo.contractAddress).to.equal(event?.args[1]);
  });
});
