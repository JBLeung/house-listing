var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Verifier = artifacts.require("Verifier");

const proof24 = require("./proof24.json");
const proof39 = require("./proof39.json");
const proof416 = require("./proof416.json");
const proof525 = require("./proof525.json");
const proof636 = require("./proof636.json");

contract("SolnSquareVerifier", accounts => {
  const account_one = accounts[0];
  const account_two = accounts[1];
  let contract;

  describe("mint", function() {
    before(async () => {
      const verifier = await Verifier.new();
      contract = await SolnSquareVerifier.new(verifier.address, "bob", "hope");
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier

    it("mint a token", async () => {
      const {
        proof: { A, A_p, B, B_p, C, C_p, H, K },
        input
      } = proof24;
      try {
        await contract.mint(account_one, A, A_p, B, B_p, C, C_p, H, K, input);
      } catch (e) {
        console.log("Error. Mint failed.", e);
      }
    });

    it("should return total supply", async () => {
      let supply, balance1;
      try {
        supply = await contract.totalSupply.call({ from: account_one });
        balance1 = await contract.balanceOf.call(account_one, {
          from: account_one
        });
      } catch (e) {
        console.log("Error reading supply or balance.", e);
      }

      assert.equal(1, supply, "Invalid supply of tokens");
      assert.equal(balance1, 1, "Invalid supply of tokens for account_one");
    });

    it("should fail on mint with same solution", async () => {
      let minted = true;
      let otherE = false;
      const {
        proof: { A, A_p, B, B_p, C, C_p, H, K },
        input
      } = proof24;
      try {
        await contract.mint(account_one, A, A_p, B, B_p, C, C_p, H, K, input);
      } catch (e) {
        if (e.message.includes("solution used before")) minted = false;
        else {
          console.log("Error. Mint failed.", e);
          otherE = true;
        }
      }

      assert.equal(false, otherE, "Error during minted a token twice");
      assert.equal(false, minted, "Invalid minted same token twice");
    });

    it("mint more tokens", async () => {
      let {
        proof: { A, A_p, B, B_p, C, C_p, H, K },
        input
      } = proof39;
      let supply, balance1;
      try {
        await contract.mint(account_one, A, A_p, B, B_p, C, C_p, H, K, input);
        ({
          proof: { A, A_p, B, B_p, C, C_p, H, K },
          input
        } = proof416);
        await contract.mint(account_one, A, A_p, B, B_p, C, C_p, H, K, input);
        supply = await contract.totalSupply.call({ from: account_one });
        balance1 = await contract.balanceOf.call(account_one, {
          from: account_one
        });
      } catch (e) {
        console.log("Error. Mint failed.", e);
      }

      assert.equal(3, supply, "Invalid supply of tokens");
      assert.equal(3, balance1, "Invalid supply of tokens for account_one");
    });
  });
});
