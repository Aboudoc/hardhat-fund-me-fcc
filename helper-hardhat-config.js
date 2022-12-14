const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xd4a33860578de61dbabdc8bfdb98fd742fa7028e",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },
    31337: {
        name: "localhost",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITAL_ANSWER,
}
