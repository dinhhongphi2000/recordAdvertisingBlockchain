

let Web3 = require('web3')
let config = require('config')
let web3 = undefined
let contractInstance = require(config.deploy.contract)

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(config.provider.host));
}

var loggingContract = new web3.eth.Contract(contractInstance.options.jsonInterface,
    contractInstance.options.address, {
        from: config.sender.address,
        gas: config.provider.gas
    });

// loggingContract.methods.getOwner().call(function(err,data){
//     console.log(data)
// })
// web3.eth.getBlockNumber((err, result) => {
//     if(err) console.log(err)
//     else
//         console.log(result)
// })
// let data = '0x7b6d657373616765203a202268656c6c6f20776f726c64222c206461746174696d65203a202232302f31302f32303137227d'
// web3.eth.sendTransaction({
//     from: "0x6A7557fbd52f05dD766473970bF1B322042a95F5",
//     to: "0xf24829e066c424dc405429c83f071bad67b385c8",
//     data: data
// },
//     (err, results) => {
//         if (err) console.log(err)
//         else console.log(results); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
//     })
// var loggingContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"d","type":"bytes32"},{"name":"m","type":"bytes32"}],"name":"logging","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
//    {
//      from: web3.eth.accounts[0], 
//      data: '0x608060405234801561001057600080fd5b5060c68061001f6000396000f300608060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680639521dec0146044575b600080fd5b348015604f57600080fd5b50607e600480360381019080803560001916906020019092919080356000191690602001909291905050506080565b005b8160008160001916905550806001816000191690555050505600a165627a7a7230582099f9990a63734f512832cc56f9ced32747f0757b955649126c3c561dcebb607d0029', 
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  })



// loggingContract.methods.getMessage(0).call(null, function (e, c) {
//     if (e) console.log(e)
//     else
//         console.log(JSON.stringify(c))
// });

class LoggingContract {
    static log(data, cb) {
        let datetime = Date.now().toString();
        loggingContract.methods.log(datetime,data).send(null, function (e, c) {
            if (e) {
                cb(e)
            }
            else{
                cb(null,c)
            }
                
        });
    }
}

module.exports = LoggingContract;