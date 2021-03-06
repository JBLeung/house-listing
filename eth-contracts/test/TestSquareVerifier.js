// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require("Verifier");

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
var proof24 = require("./proof24.json");
var proof39 = require("./proof39.json");
var proof416 = require("./proof416.json");
var proof525 = require("./proof525.json");
var proof636 = require("./proof636.json");

// Test verification with incorrect proof

contract("Test Square Verifier", async accounts => {
  var verifier;
  before("setup contract", async () => {
    verifier = await Verifier.new();
  });

  it(`verify with correct proof 2 4`, async () => {
    const {
      proof: { A, A_p, B, B_p, C, C_p, H, K },
      input
    } = proof24;
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, input);
    assert.equal(v, true, "Failed verify true.");
  });

  it(`verify with correct proof 3 9`, async () => {
    const {
      proof: { A, A_p, B, B_p, C, C_p, H, K },
      input
    } = proof39;
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, input);
    assert.equal(v, true, "Failed verify true.");
  });

  it(`verify with correct proof 4 16`, async () => {
    const {
      proof: { A, A_p, B, B_p, C, C_p, H, K },
      input
    } = proof416;
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, input);
    assert.equal(v, true, "Failed verify true.");
  });

  it(`verify with correct proof 5 25`, async () => {
    const {
      proof: { A, A_p, B, B_p, C, C_p, H, K },
      input
    } = proof525;
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, input);
    assert.equal(v, true, "Failed verify true.");
  });

  it(`verify with correct proof 6 36`, async () => {
    const {
      proof: { A, A_p, B, B_p, C, C_p, H, K },
      input
    } = proof636;
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, input);
    assert.equal(v, true, "Failed verify true.");
  });

  it(`verify with incorrect proof`, async () => {
    const {
      proof: { A, A_p, B, B_p, C, C_p, H, K },
      input
    } = proof39;
    const v = await verifier.verifyTx.call(A, A_p, B, B_p, C, C_p, H, K, [
      8,
      1
    ]);
    assert.equal(v, false, "Failed verify false.");
  });
});
