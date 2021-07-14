const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlockchain(150, 12, 11);
bitcoin.createNewTransaction(100, 'Sender1', 'recipient1');
console.log(bitcoin);
bitcoin.createNewBlockchain(155, 11, 10);
console.log(bitcoin.chain[1]);