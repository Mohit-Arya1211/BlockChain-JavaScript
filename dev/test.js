const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();
console.log(bitcoin);

// const previousBlockHash = 'NDFKJANLDSFAJK';

// const currentBlockData = [
//     { amount: 100,
//       sender: 'Sender1',
//       recipient: 'Recipient1'
//     },
//     { amount: 1000,
//         sender: 'Sender2',
//         recipient: 'Recipient2'
//       }
// ];

// nounce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
// console.log(nounce);
// a = bitcoin.hashBlock(previousBlockHash, currentBlockData, nounce);
// console.log(a);