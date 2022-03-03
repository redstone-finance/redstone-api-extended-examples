const redstone = require("redstone-api-extended");

describe("Example STX", () => {
  test("Should fetch STX symbol from main redstone provider", async () => {
    const dataPackage = await redstone.oracle.getFromDataFeed("redstone", "STX");
    console.log(dataPackage);
  });
});
