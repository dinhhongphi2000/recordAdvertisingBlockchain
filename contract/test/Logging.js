var StringUtils = artifacts.require('StringUtils');
var Logging = artifacts.require('Logging');

contract('StringUtils', (accounts) => {
    it('it return true', () => {
        var contract;
        return StringUtils.deployed().then((instance) => {
            contract = instance;
            return instance.compare('1','2');
        }).then((result) => {
            assert.equal(result.toNumber(), -1);
        }).catch((err) => {
            console.log(err);
        })
    })
})

contract('Logging', () => {
    it('it return duraton', () => {
        var contract;
        return Logging.deployed().then((instance) => {
            contract = instance;
            return instance.push('1',10);
        }).then((result) => {
            return contract.getDuration.call('1');
        }).then((result) => {
            assert.equal(result.toNumber(),10);
        }).catch((err) => {
            console.log(err);
        })
    })
})