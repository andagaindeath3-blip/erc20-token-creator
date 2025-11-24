const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Создание токена с адреса:", deployer.address);

  // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
  // ВСТАВЬ СВОЙ АДРЕС СЮДА (ОДИН РАЗ И НАВСЕГДА):
  const MY_WALLET = "0x1F51415288f00e50161882A7702D8511208B3Dd8";
  // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

  // Комиссия берётся автоматически из конфига сети
  const CREATE_FEE = hre.ethers.parseEther(hre.network.config.createFee || "0.05");

  const balance = await deployer.getBalance();
  if (balance < CREATE_FEE + hre.ethers.parseEther("0.2")) {
    throw new Error("Недостаточно средств на балансе (нужно больше газа + комиссии)");
  }

  // ОТПРАВЛЯЕМ ТЕБЕ КОМИССИЮ
  console.log(`Отправляю тебе комиссию \( {hre.ethers.formatEther(CREATE_FEE)} \){hre.network.name.toUpperCase()}...`);
  const tx = await deployer.sendTransaction({
    to: MY_WALLET,
    value: CREATE_FEE
  });
  await tx.wait();
  console.log(`Комиссия отправлена! https://\( {getExplorer(hre.network.name)}/tx/ \){tx.hash}`);

  // Создаём токен
  const Token = await hre.ethers.getContractFactory("ERC20TokenCreator");
  const token = await Token.deploy(
    process.env.TOKEN_NAME || "MyToken",
    process.env.TOKEN_SYMBOL || "MTK",
    process.env.TOTAL_SUPPLY || "1000000000"
  );

  await token.waitForDeployment();
  console.log("ТОКЕН СОЗДАН УСПЕШНО!");
  console.log("Адрес:", await token.getAddress());
  console.log(`Ты получил \( {hre.ethers.formatEther(CREATE_FEE)} \){hre.network.name.toUpperCase()} 💰`);
}

function getExplorer(network) {
  const explorers = {
    bsc: "bscscan.com",
    ethereum: "etherscan.io",
    polygon: "polygonscan.com",
    arbitrum: "arbiscan.io",
    base: "basescan.org",
    optimism: "optimistic.etherscan.io",
    avalanche: "snowtrace.io",
    fantom: "ftmscan.com"
  };
  return explorers[network] || "etherscan.io";
}

main().catch((error) => {
  console.error(error);
  process.exit(1);

});


