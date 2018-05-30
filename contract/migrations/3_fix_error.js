const StringUtils = artifacts.require('StringUtils');
const Logging = artifacts.require('Logging');

module.exports = function(deployer){
    deployer.deploy(StringUtils);
    deployer.link(StringUtils, Logging);
    deployer.deploy(Logging);
}