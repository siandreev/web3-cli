## Web3-cli

### Get started
1. Create `.env` file following format
```
KOVAN_RPC=<rpc_link>
GOERLI_RPC=<rpc_link>
ROPSTEN_RPC=<rpc_link>
MAINNET_RPC=<rpc_link>
BINANCE_RPC=<rpc_link>
MATIC_RPC=https://rpc-mainnet.maticvigil.com/
XDAI_RPC=https://rpc.xdaichain.com/
GANACHE=<ganache_sandbox_url>
LOCAL=<local_rpc_url>
PRIVATE_KEY=<private_key>
LOCAL_KEY=<private_key_for_local_node>
GANACHE_KEY=<private_key_for_ganache>
```

2. Run `yarn` to install dependencies.

3. Add following to `.zshrc` or `.bashrc`
`alias web3="node --experimental-repl-await <PATH_TO_PROJECT>/index.js"`

### Usage
1. Type `web3` in terminal to run web3-cli

2. Change the selected blockchain by calling the corresponding function, e.g. `mainnet()` to select ethereum mainnet. The default chain is kovan.

3. Call any web3 method using repl await and injected web3:
```javascript
web3> await web3.eth.getBalance(address)
```

Also, you can use an injected variable `address` containing the wallet current address.
