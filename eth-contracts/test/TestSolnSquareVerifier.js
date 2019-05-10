var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Verifier = artifacts.require("Verifier");

const {
  proof: { A, A_p, B, B_p, C, C_p, H, K },
  input
} = require("./proof.json");

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
      try {
        await contract.mint(account_one, A, A_p, B, B_p, C, C_p, H, K, input);
      } catch (e) {
        //console.log("Error. Mint failed.", e);
        if (e.message.includes("solution used before")) minted = false;
      }

      assert.equal(false, minted, "Invalid minted same token twice");
    });
  });
});
