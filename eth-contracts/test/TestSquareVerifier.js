// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require("Verifier");

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
const {
  proof: { A, A_p, B, B_p, C, C_p, H, K },
  input
} = require("./proof.json");

// Test verification with incorrect proof

contract("Test Square Verifier", async accounts => {
  var verifier;
  before("setup contract", async () => {
    verifier = await Verifier.new();
  });

  it(`verify with correct proof`, async () => {
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, input);
    assert.equal(v, true, "Failed verify true.");
  });

  it(`verify with incorrect proof`, async () => {
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, [
      8,
      1
    ]);
    assert.equal(v, false, "Failed verify false.");
  });
});
