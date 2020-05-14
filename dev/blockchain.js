const sha256 = require('sha256');

function BlockChain(){
    this.chain=[];
    this.pendingTransactions=[];
    this.createNewBlock(100,'0','0');
}

BlockChain.prototype.createNewBlock=function(nonce,prevBlockHash,hash){

    const newBlock={
        index:this.chain.length+1,
        timestamp: Date.now(),
        transactions:this.pendingTransactions,
        nonce:nonce,
        hash:hash,
        prevBlockHash:prevBlockHash
    }
    this.pendingTransactions=[];
    this.chain.push(newBlock);
    return newBlock;
}

BlockChain.prototype.getLastBlock=function(){
    return this.chain[this.chain.length-1]
}

BlockChain.prototype.createNewTransaction=function(amount,sender,recipient){
  const newTransaction={
      amount:amount,
      sender:sender,
      recipient:recipient
  }
  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index']+1;
}

BlockChain.prototype.hashBlock=function(prevBlockHash,currentBlockData,nonce){

    const dataAsString= prevBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
    const hash= sha256(dataAsString);
    return hash;
}

BlockChain.prototype.proofOfWork = function(prevBlockHash,currentBlockData){

    let nonce = 0;
    let hash=this.hashBlock(prevBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4)!='0000')
    {
        nonce++;
      hash=this.hashBlock(prevBlockHash,currentBlockData,nonce);
    }
    return nonce;
}

module.exports=BlockChain;
