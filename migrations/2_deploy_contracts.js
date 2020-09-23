const MANY = artifacts.require('MANY.sol');

module.exports = function (deployer) {
    async function testnetDeployment(deployer) {
        deployer.logger.log('Deploying MANY to testnet environment');

        let name = 'MANY';
        let symbol = 'MANY';
        await deployer.deploy(MANY, name, symbol);
    }

    async function deploy(deployer) {
        await testnetDeployment(deployer);
    }

    return deployer.then(() => deploy(deployer));
}