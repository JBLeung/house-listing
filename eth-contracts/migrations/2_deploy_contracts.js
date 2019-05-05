// migrating the appropriate contracts
const Verifier = artifacts.require("./Verifier.sol");
//const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(Verifier); //.then(() => /*deployer.deploy(SolnSquareVerifier) */);
};
