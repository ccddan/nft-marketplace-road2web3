# NFT Marketplace - Road To Web3 by Alchemy - Week 7

## Basic usage

To set up the repository and run the marketplace locally, run the following commands:

```bash
$ npm install
$ cp .example.env .env # web app: update only Pinata related env vars
$ npm start
```

# Development

```bash
$ npm install
$ cp .example.env .env # update values for all env vars
$ npx hardhat compile
$ npx hardhat run scripts/deploy.js --network goerli
$ npx hardhat verify --network goerli <contract-address>
$ npm start
```
