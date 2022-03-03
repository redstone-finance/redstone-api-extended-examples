# redstone-api-extended-examples

## Setup
```sh
yarn install
```

## Run examples
You can check examples in the `test/examples` folder
```sh
yarn test test/examples
```

## Run big tests
Big test conduct 1 thousand interations of data fetching to maximise chances of finding a moment when any source doesn't work
```sh
yarn test test/big-tests
```

## Run default tests
Default tests test each single source for each data provider
```sh
yarn test:default
```
