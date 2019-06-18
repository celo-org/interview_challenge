# Infrastructure Challenge

Welcome to the C Labs Infrastructure challenge. In this challenge, you'll be create some tooling to deploy a very simple web app.

**Context**

The Ethereum ecosystem has various testnets on which users and developers can test out smart contracts or wallet applications before dealing with the real deal. [Read more about the various testnets](https://ethereum.stackexchange.com/questions/27048/comparison-of-the-different-testnets). There are various services like [blockscout.com](blockscout.com) that can access information on such testnets, such as balances of a wallet. A wallet is nothing more than a private key that can generate addresses for the wallet, and can be created on websites like [https://generatepaperwallet.com/ethereum/index.html](https://generatepaperwallet.com/ethereum/index.html).

**App**

This is a simple express app that queries [blockscout.com](https://blockscout.com/) for the balance of a supplied address on a configured ETH network. It caches requests to Blockscout via Redis. To test the app, you'll likely want to create a wallet and then give it a few ETH at the testnet's faucet.

You can see the source code under the `client` directory. We also supplied a simple-to-run docker image under `nambrot/interview-infra-client`. The app can be configured via the following `ENV` variables:

- `REDIS`, defaults to `localhost:6379` and should allow the app to connect to a redis instance where it will cache requests
- `CACHE_EXPIRATION`, defaults to `30` and sets the expiration time of a request in seconds
- `BLOCKSCOUT_URL`, defaults to `https://blockscout.com/eth/goerli` for the blockscout base url to use for querying a specific testnet


**Example Testnets to use**

- Goerli testnet: [Blockscout](https://blockscout.com/eth/goerli) and [Faucet](https://goerli-faucet.slock.it/)
- Ropsten testnet: [Blockscout](https://blockscout.com/eth/ropsten) and [Faucet](https://faucet.ropsten.be/)
- Rinkeby testnet: [Blockscout](https://blockscout.com/eth/rinkeby) and [Faucet](https://faucet.rinkeby.io/)


**Deliverables**

The challenge is meant to be open ended, but at the minimum, we expect you to create some sort of configuration/automation/documentation that allows for easy deployment of this app for various testnets on a Kubernetes platform, we have good experience with using [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/) and [Helm](https://helm.sh/). Please clone this repo, create a private repo with any code and write-up you have contributed.