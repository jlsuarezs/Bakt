// ropsten: "Bakt 0.2.3_tc_alpha Dep_1 @ 0x70ec0c2440d91b27fddf9feb6b6df431e83a4563"
// ropsten: "Bakt 0.2.6_tc_alpha Dep_1 @ 0x49bc0636525faa8b800917191d5ae18bf6c1aab5"
// Ropsten: 0.3.2_tc_alpha - 0x87b3aaa71c096539f72d9a298adb73c9302a31bf

baktABI = [{"constant":false,"inputs":[{"name":"_resource","type":"bytes32"}],"name":"changeResource","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ptxHead","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"etherBalanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"holders","outputs":[{"name":"id","type":"uint8"},{"name":"votingFor","type":"address"},{"name":"offerExpiry","type":"uint40"},{"name":"lastClaimed","type":"uint256"},{"name":"tokenBalance","type":"uint256"},{"name":"etherBalance","type":"uint256"},{"name":"votes","type":"uint256"},{"name":"offerAmount","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeToCalm","outputs":[{"name":"","type":"uint40"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"regName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"acceptingPayments","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"resource","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"pTxId_","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"calm","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"committedEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHolders","outputs":[{"name":"","type":"address[256]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"purchase","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pendingTxs","outputs":[{"name":"blocked","type":"bool"},{"name":"timeLock","type":"uint40"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"payDividends","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_txIdx","type":"uint256"}],"name":"blockPendingTx","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_candidate","type":"address"}],"name":"vote","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"PANICPERIOD","outputs":[{"name":"","type":"uint40"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_accepting","type":"bool"}],"name":"acceptPayments","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_amount","type":"uint256"}],"name":"issue","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"panicked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"sendPending","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"addHolder","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"holderIndex","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ptxTail","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"TXDELAY","outputs":[{"name":"","type":"uint40"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"revokeOffer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"vacate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimalPlaces","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"PANIC","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_panicPeriodInSeconds","type":"uint40"},{"name":"_pendingPeriodInSeconds","type":"uint40"}],"name":"_init","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"trustee","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"_creator","type":"address"},{"name":"_regName","type":"bytes32"},{"name":"_trustee","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"recipient","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Withdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"pTX","type":"uint256"},{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"recipient","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"timeLock","type":"uint256"}],"name":"TransactionPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"},{"indexed":true,"name":"pTX","type":"uint256"}],"name":"TransactionBlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"recipient","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"TransactionFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"DividendPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trustee","type":"address"}],"name":"Trustee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"holder","type":"address"}],"name":"NewHolder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"holder","type":"address"}],"name":"HolderVacated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"holder","type":"address"}],"name":"IssueOffer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"holder","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokensCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"holder","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokensDestroyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"}],"name":"Panicked","type":"event"},{"anonymous":false,"inputs":[],"name":"Calm","type":"event"}];
baktContract = web3.eth.contract(baktABI);

