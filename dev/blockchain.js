class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransaction = [];
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

Blockchain.prototype.getLastBlock = function() {
    return (this.chain.length - 1);
}

module.exports = Blockchain;