// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./CryptoStreamr.sol";

contract CryptoStreamrFactory is Ownable {
    struct CreatorInfo {
        string username;
        address creatorAddress;
        address contractAddress;
    }

    mapping(address => CreatorInfo) public creatorInfoByAddress;
    mapping(string => CreatorInfo) public creatorInfoByUsername;
    mapping(string => address) public usernameToAddress;

    event ContractDeployed(
        address indexed creatorAddress,
        address indexed creatorContractAddress
    );

    constructor() Ownable(msg.sender) {}

    /// @dev Function to deploy a new CryptoStreamr contract
    /// @param username - The username of the creator
    function deployContract(
        string calldata username
    ) external returns (address) {
        require(
            creatorInfoByAddress[msg.sender].contractAddress == address(0),
            "Contract already deployed"
        );
        require(
            usernameToAddress[username] == address(0),
            "Username already registered"
        );

        CryptoStreamr cryptoStreamr = new CryptoStreamr();
        cryptoStreamr.transferOwnership(msg.sender);

        CreatorInfo memory creatorInfo = CreatorInfo({
            username: username,
            creatorAddress: msg.sender,
            contractAddress: address(cryptoStreamr)
        });

        creatorInfoByAddress[msg.sender] = creatorInfo;
        creatorInfoByUsername[username] = creatorInfo;
        usernameToAddress[username] = msg.sender;

        emit ContractDeployed(msg.sender, address(cryptoStreamr));

        return address(cryptoStreamr);
    }
}
