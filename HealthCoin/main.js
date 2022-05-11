const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "bce11a65ad1ce4504e49307b032d06f217f30d3f45f8310318c8e7743da300a9"
);
const myWalletAddress = myKey.getPublic("hex");

let healthcoin = new Blockchain();

const tx1 = new Transaction(
  myWalletAddress,
  "Public key of recipient goes here",
  10
);
tx1.signTransaction(myKey);
healthcoin.addTransaction(tx1);

console.log("\n Starting the miner...");
healthcoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of Devan is",
  healthcoin.getBalanceOfAddress(myWalletAddress)
);

console.log("Is chain valid?", healthcoin.isChainValid());
