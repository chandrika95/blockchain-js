const BlockChain =require('./blockchain');
const bitcoin= new BlockChain();


 //bitcoin.createNewBlock(2323,'93U3HFEHFENWL','83EGFKDJ03WHWK');
// bitcoin.createNewTransaction(1000,'SAJU89237434REGF','JEN3746WUED');
// bitcoin.createNewBlock(4546,'34FSEDFD7RTFG','35FSFH65');

const previousBlockHash = '939HRDJF945UIERKUWHERR';
const currentBlockData =[
{
    amount:101,
    sender:'34FSEDFD7RTFG',
    recipient:'93U3HFEHFENWL'
},
{
    amount:201,
    sender:'SAJU89237434REGF',
    recipient:'JEN3746WUED'
},
{
    amount:301,
    sender:'35FSFH65',
    recipient:'83EGFKDJ03WHWK'
}
];

console.log(bitcoin);




