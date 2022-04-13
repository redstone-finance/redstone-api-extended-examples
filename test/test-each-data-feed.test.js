const redstone = require("redstone-api-extended");

const dataFeedIds = [
  "redstone",
  "redstone-stocks",
  "redstone-rapid",
  "redstone-avalanche",
  "redstone-avalanche-prod",
];

describe("Test all data feeds", () => {
  for (const dataFeedId of dataFeedIds) {
    test(`Checking data feed: ${dataFeedId}`, async () => {
      await redstone.oracle.getFromDataFeed(dataFeedId);
    });
  }
});
