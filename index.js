#!/usr/bin/env node

import repl from 'repl';
import Web3 from 'web3';
import dotenv from 'dotenv';
import path from "path";

dotenv.config({ path:path.join(process.argv[1], '..', '.env')});
const web3 = new Web3(process.env.KOVAN_RPC);
web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);

const cli = repl.start('web3> ');

cli.context.web3 = web3;
cli.context.address = web3.eth.accounts.wallet[0].address;
cli.context.log = console.log;
cli.context.goerli = () => setNewWeb3('goerli', process.env.GOERLI_RPC);
cli.context.kovan = () => setNewWeb3('kovan', process.env.KOVAN_RPC);
cli.context.ropsten = () => setNewWeb3('ropsten', process.env.ROPSTEN_RPC);
cli.context.local = () => setNewWeb3('local', process.env.LOCAL, process.env.LOCAL_KEY);
cli.context.mainnet = () => setNewWeb3('ethereum mainnet', process.env.MAINNET_RPC);
cli.context.matic = () => setNewWeb3('matic', process.env.MATIC_RPC);
cli.context.moonriver = () => setNewWeb3('moonriver', process.env.MOONRIVER_RPC);
cli.context.ganache = () => setNewWeb3('ganache', process.env.GANACHE, process.env.GANACHE_KEY);
cli.context.bsc = () => setNewWeb3('bsc', process.env.BINANCE_RPC);
cli.context.xDai = () => setNewWeb3('xDai', process.env.XDAI_RPC);
cli.context.avalanche = () => setNewWeb3('avalanche', process.env.AVALANCHE_RPC);

function setNewWeb3(title, provider, key = process.env.PRIVATE_KEY) {
    const web3 = new Web3(provider);
    web3.eth.accounts.wallet.add(key);
    cli.context.web3 = web3;
    cli.context.address = web3.eth.accounts.wallet[0].address;
    return `Now using ${title} blockchain`
}

