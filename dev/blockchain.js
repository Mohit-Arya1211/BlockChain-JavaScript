const sha256 = require('sha256');

class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransaction = [];
        this.createNewBlockchain(100, '0', '0');
    }
}

Blockchain.prototype.createNewBlockchain = function(nounce, previousBlockHash, Hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransaction,
        nounce: nounce,
        Hash: Hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransaction = [];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransaction.push(newTransaction);
    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nounce) {
    const dataAsString = previousBlockHash.toString() + nounce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nounce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nounce);
    while(hash.substring(0,4) != '0000'){
        nounce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nounce);
    }
    return nounce;
}

Blockchain.prototype.getLastBlock = function() {
    return (this.chain.length - 1);
}



module.exports = Blockchain;