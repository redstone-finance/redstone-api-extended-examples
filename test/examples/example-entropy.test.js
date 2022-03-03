const redstone = require("redstone-api-extended");

describe("Example ENTROPY", () => {
  test("Should fetch ENTROPY symbol from main redstone provider", async () => {
    const dataPackage = await redstone.oracle.getFromDataFeed("redstone", "ENTROPY");
    console.log(dataPackage);
  });
});
