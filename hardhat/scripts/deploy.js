const hre = require("hardhat");

async function main() {
  const crypt = await hre.ethers.getContractFactory("Crypt");
  const contract = await crypt.deploy();

  await contract.deployed();

  console.log(`Deployed to: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
