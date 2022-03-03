const redstone = require("redstone-api-extended");

describe("Example redstone-avalanche-prod", () => {
  test("Should fetch redstone-avalanche-prod data package", async () => {
    const dataPackage = await redstone.oracle.getFromDataFeed("redstone-avalanche-prod");
    console.log(dataPackage);
  });
});
