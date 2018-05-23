
let Web3 = require('web3')
var fs = require('fs')
var config = require('config')

var contractInstantPath = config.deploy.contract;
let web3 = undefined

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(config.provider.host));
}

var contract = require(config.compile.output).contracts[config.contract.name];
var abi = JSON.parse(contract.interface.replace('\\', ''))
var bytecode = '0x' + contract.bytecode
var loggingContract = new web3.eth.Contract(abi);

loggingContract.deploy({ data: bytecode })
    .send({
        from: config.sender.address,
        gas: config.provider.gas,
    }, function (error, transaction) {
    })
    .on('error', function (error) {
        console.log("Error")
        console.log(error)
    })
    .on('transactionHash', function (transactionHash) {
        console.log('TransactionHash')
        console.log(transactionHash)
    })
    .then(function (newContractInstance) {
        fs.writeFile(contractInstantPath,JSON.stringify(newContractInstance),function(err){
            if(err) console.log(err)
            else console.log('save new contract success')
        })  
    });
