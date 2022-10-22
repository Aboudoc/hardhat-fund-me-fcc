const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding contracts")
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("1"),
    })
    await transactionResponse.wait(1)
    console.log("Funded")
    console.log(
        `Contract balance =${await fundMe.provider.getBalance(fundMe.address)}`
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
