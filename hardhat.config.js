require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    // === BINANCE SMART CHAIN ===
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 56,
      gasPrice: 3000000000, // 3 gwei
      createFee: "0.05" // ← Ты получаешь 0.05 BNB за каждый токен на BSC
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97,
      createFee: "0.01" // тестнет — меньше комиссия
    },

    // === ETHEREUM ===
    ethereum: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY || ""}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
      createFee: "0.02" // ← Ты получаешь 0.02 ETH за токен на Ethereum
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY || ""}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      createFee: "0.005"
    },

    // === POLYGON ===
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137,
      gasPrice: 100000000000, // 100 gwei
      createFee: "8" // ← Ты получаешь 8 MATIC
    },
    amoy: { // Polygon тестнет
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80002,
      createFee: "1"
    },

    // === ARBITRUM ===
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 42161,
      createFee: "0.008" // ← 0.008 ETH
    },

    // === BASE ===
    base: {
      url: "https://mainnet.base.org",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 8453,
      createFee: "0.007" // ← 0.007 ETH
    },

    // === OPTIMISM ===
    optimism: {
      url: "https://mainnet.optimism.io",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 10,
      createFee: "0.006"
    },

    // === AVALANCHE ===
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 43114,
      createFee: "0.3" // ← 0.3 AVAX
    },

    // === FANTOM ===
    fantom: {
      url: "https://rpc.ftm.tools/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 250,
      createFee: "15" // ← 15 FTM
    },

    // === ZKSYNC ERA ===
    zksync: {
      url: "https://mainnet.era.zksync.io",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 324,
      ethNetwork: "ethereum", // нужна для верификации
      zksync: true,
      createFee: "0.005"
    },

    // === SCROLL ===
    scroll: {
      url: "https://rpc.scroll.io",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 534352,
      createFee: "0.004"
    }
  },

  etherscan: {
    apiKey: {
      bsc: process.env.BSCSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      ethereum: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      base: process.env.BASESCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISM_API_KEY,
      avalanche: process.env.SNOWTRACE_API_KEY,
      ftm: process.env.FTMSCAN_API_KEY,
    }
  }
};