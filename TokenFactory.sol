// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ERC20Token.sol";

contract TokenFactory {
    event TokenCreated(address indexed tokenAddress, string name, string symbol);

    function createToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint8 decimals
    ) external returns (address) {
        ERC20Token newToken = new ERC20Token(name, symbol, initialSupply, decimals);
        emit TokenCreated(address(newToken), name, symbol);
        return address(newToken);
    }
}