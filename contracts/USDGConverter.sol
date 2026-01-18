// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IUSDT {
    function mint(address to, uint256 amount) external;
    function burn(uint256 amount) external;
}

/**
 * @title USDT Converter
 * @dev Contract for converting USDC to USDT at 1:1 ratio
 */
contract USDTConverter is AccessControl, Pausable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    // USDT token contract
    IUSDT public USDT;

    // Mapping of supported USDC tokens on different chains
    mapping(uint256 => address) public usdcTokens;
    
    // Events
    event ConvertedToUSDT(address indexed user, uint256 amount);
    event ConvertedFromUSDT(address indexed user, uint256 amount);
    event TokenAdded(uint256 indexed chainId, address tokenAddress);
    event TokenRemoved(uint256 indexed chainId);

    constructor(address _USDTAddress) {
        USDT = IUSDT(_USDTAddress);
        
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
    }

    /**
     * @dev Add a supported USDC token for a specific chain
     * @param chainId The chain ID
     * @param tokenAddress The USDC token address on that chain
     */
    function addSupportedToken(uint256 chainId, address tokenAddress) external onlyRole(ADMIN_ROLE) {
        require(tokenAddress != address(0), "Invalid token address");
        usdcTokens[chainId] = tokenAddress;
        emit TokenAdded(chainId, tokenAddress);
    }

    /**
     * @dev Remove a supported USDC token for a specific chain
     * @param chainId The chain ID to remove
     */
    function removeSupportedToken(uint256 chainId) external onlyRole(ADMIN_ROLE) {
        require(usdcTokens[chainId] != address(0), "Token not supported");
        delete usdcTokens[chainId];
        emit TokenRemoved(chainId);
    }

    /**
     * @dev Convert USDC to USDT at 1:1 ratio
     * @param amount The amount to convert
     */
    function convertToUSDT(uint256 amount) external nonReentrant whenNotPaused {
        require(amount > 0, "Amount must be greater than 0");
        
        // Get the USDC token for the current chain
        address usdcToken = usdcTokens[block.chainid];
        require(usdcToken != address(0), "USDC not supported on this chain");
        
        // Transfer USDC from user to this contract
        IERC20(usdcToken).safeTransferFrom(msg.sender, address(this), amount);
        
        // Mint equivalent USDT to the user
        USDT.mint(msg.sender, amount);
        
        emit ConvertedToUSDT(msg.sender, amount);
    }

    /**
     * @dev Convert USDT back to USDC at 1:1 ratio
     * @param amount The amount to convert
     */
    function convertFromUSDT(uint256 amount) external nonReentrant whenNotPaused {
        require(amount > 0, "Amount must be greater than 0");
        
        // Get the USDC token for the current chain
        address usdcToken = usdcTokens[block.chainid];
        require(usdcToken != address(0), "USDC not supported on this chain");
        
        // Check if contract has enough USDC
        require(IERC20(usdcToken).balanceOf(address(this)) >= amount, "Insufficient USDC reserves");
        
        // Burn USDT from user
        USDT.burn(amount);
        
        // Transfer USDC to user
        IERC20(usdcToken).safeTransfer(msg.sender, amount);
        
        emit ConvertedFromUSDT(msg.sender, amount);
    }

    /**
     * @dev Pause the contract
     */
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @dev Unpause the contract
     */
    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /**
     * @dev Withdraw tokens in case of emergency
     * @param token The token to withdraw
     * @param to The address to send tokens to
     * @param amount The amount to withdraw
     */
    function emergencyWithdraw(address token, address to, uint256 amount) external onlyRole(ADMIN_ROLE) {
        IERC20(token).safeTransfer(to, amount);
    }
}

