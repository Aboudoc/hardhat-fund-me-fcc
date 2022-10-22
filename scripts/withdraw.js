const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Withdrawing, please wait...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log(`Withdrawn to this address: ${deployer}`)
    console.log(
        `Contract balance = ${await fundMe.provider.getBalance(fundMe.address)}`
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
