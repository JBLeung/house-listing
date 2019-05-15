# Ethereum Housing Listing Service

The code in this repository is based of
[this repository](https://github.com/udacity/Blockchain-Capstone)
and enhanced for the
[Udacity Blockchain Term 2 Capstone Project](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309).

Need to deploy with `truffle migrate --reset --network rinkeby` not deploy.
Other command variations failed migrating the contract.

Helpfull links:

- [myetherwallet](https://myetherwallet.com/interface/interact-with-contract)
  to access and modify contracts directly
- [etherscan](https://rinkeby.etherscan.io)
  for verifying contract deployment and account balances

## Notes - Ignore

Everything below this line can be ignored as they are just notes to myself.

Read for student hub between 4/20/19 - 4/30/19.

CJSMBP:eth-contracts carltonjoseph\$ truffle migrate --reset --network rinkeby

# Compiling your contracts...

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'rinkeby'
> Network id: 4
> Block gas limit: 0x6acfc0

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x240a92e05ce3a66d811e9b281c5d26f8def775f027e78fce39577660a897051a
> Blocks: 1 Seconds: 16
> contract address: 0xb37f163C6415a6925CEbE65D5bfd92a6Ad26Ff8c
> block number: 4383945
> block timestamp: 1557888649
> account: 0x61F6c5a0dA7fC2A6499cB681f963BA79AD3DD30E
> balance: 14.808545369
> gas used: 273162
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.005736402 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.005736402 ETH

# 2_deploy_contracts.js

Deploying 'Verifier'

---

> transaction hash: 0x7707eb3fb41b973ca5e77fa5e4b3b7c643711f24b35e7bb3aa2365d58ab6ebc4
> Blocks: 0 Seconds: 12
> contract address: 0x63cBaaF2e8713895bBB4cd2ae82c313ddbe300B6
> block number: 4383947
> block timestamp: 1557888679
> account: 0x61F6c5a0dA7fC2A6499cB681f963BA79AD3DD30E
> balance: 14.770397483
> gas used: 1774538
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.037265298 ETH

Deploying 'SolnSquareVerifier'

---

> transaction hash: 0x08646bf2ebd78c3845bdd218fec6bf862a64ad64c689aa7251dd11a6e68097ad
> Blocks: 0 Seconds: 8
> contract address: 0x458D7c15E3392B95149c4FC3780805883d2eb0eD
> block number: 4383948
> block timestamp: 1557888694
> account: 0x61F6c5a0dA7fC2A6499cB681f963BA79AD3DD30E
> balance: 14.6787173
> gas used: 4365723
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.091680183 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.128945481 ETH

# Summary

> Total deployments: 3
> Final cost: 0.134681883 ETH
