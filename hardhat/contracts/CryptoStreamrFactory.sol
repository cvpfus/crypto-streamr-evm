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

    uint8 public feePercentage = 5;

    event ContractDeployed(
        address indexed creatorAddress,
        address indexed creatorContractAddress
    );
    event Withdraw(address indexed owner, uint256 amount);

    constructor() Ownable(msg.sender) {}
    
    receive() external payable {}

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

        CryptoStreamr cryptoStreamr = new CryptoStreamr(address(this));
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

    /// @dev Function to set the fee percentage
    /// @param _feePercentage - The fee percentage to set
    function setFeePercentage(uint8 _feePercentage) external onlyOwner {
        require(_feePercentage <= 10, "Fee percentage must be less than or equal to 10");
      
        feePercentage = _feePercentage;
    }

    /// @dev Function to withdraw the contract balance to the owner
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");

        (bool success, ) = owner().call{value: balance}("");
        require(success, "Withdraw failed");

        emit Withdraw(owner(), balance);
    }
    
}
