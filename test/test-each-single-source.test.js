const redstone = require("redstone-api-extended");

const MAX_TIME_DIFF = 175000; // 175s

const dataFeedIds = [
  "redstone",
  "redstone-stocks",
  "redstone-rapid",
  "redstone-avalanche",
  "redstone-avalanche-prod",
];

describe("Test all sources separately", () => {

  for (const dataFeedId of dataFeedIds) {
    describe(`Test data sources for: ${dataFeedId}`, () => {
      const defaultSourcesConfig = redstone.oracle.getDefaultDataSourcesConfig(dataFeedId);
      const sourcesCount = defaultSourcesConfig.sources.length;
  
      // Testing each data source seprately
      for (let sourceIndex = 0; sourceIndex < sourcesCount; sourceIndex++) {
        const source = defaultSourcesConfig.sources[sourceIndex];

        test(`Should fetch using source: ${sourceIndex + 1}/${sourcesCount} (${source.type})`, async () => {
          await testFetching({
            ...defaultSourcesConfig,
            sources: [ source ], // Single source
          });
        });
      }
    });
  }

});

async function testFetching(dataSourcesConfig) {
  const dataPackage = await redstone.oracle.get(dataSourcesConfig);
  const timestampDiff = Date.now() - dataPackage.priceData.timestamp;
  expect(timestampDiff).toBeLessThan(MAX_TIME_DIFF);
}
