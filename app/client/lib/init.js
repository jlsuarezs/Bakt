if(typeof web3 === 'undefined')
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	// web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8546'));

EthAccounts.init();
EthBlocks.init();

