var ERC721Mintable = artifacts.require("ERC721Mintable");

contract("TestERC721Mintable", accounts => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  describe("match erc721 spec", function() {
    beforeEach(async function() {
      const contract = await ERC721Mintable.new("bob", "hope", {
        from: account_one
      });
      this.contract = contract;
      // TODO: mint multiple tokens
      contract.mint(account_one, 1);
      contract.mint(account_one, 2);
      contract.mint(account_two, 3);
      contract.mint(account_two, 4);
      contract.mint(account_two, 5);
    });

    it("should return total supply", async function() {
      const supply = await this.contract.totalSupply.call();
      assert.equal(supply, 5, "Invalid supply of tokens");
    });

    it("should get token balance", async function() {
      const balance1 = await this.contract.balanceOf.call(account_one);
      const balance2 = await this.contract.balanceOf.call(account_two);
      assert.equal(balance1, 2, "Invalid supply of tokens for account_one");
      assert.equal(balance2, 3, "Invalid supply of tokens for account_two");
    });
    // token uri should be complete i.e:
    // https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function() {
      const uri = await this.contract.tokenURI.call(1);
      assert.equal(
        uri,
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1",
        "Invalid uri"
      );
    });

    it("should transfer token from one owner to another", async function() {
      await this.contract.transferFrom(account_one, account_two, 2, {
        from: account_one
      });
      const balance1 = await this.contract.balanceOf.call(account_one);
      const balance2 = await this.contract.balanceOf.call(account_two);
      assert.equal(balance1, 1, "Invalid supply of tokens for account_one");
      assert.equal(balance2, 4, "Invalid supply of tokens for account_two");
    });
  });

  describe("have ownership properties", function() {
    beforeEach(async function() {
      this.contract = await ERC721Mintable.new("bob", "hope", {
        from: account_one
      });
    });

    it("should fail when minting when address is not contract owner", async function() {
      let minted = true;
      try {
        await this.contract.mint(account_two, 6, { from: account_two });
      } catch (e) {
        // console.log(`mint failed`, e); // uncomment for debug
        if (e.message.includes("must be the owner")) minted = false;
      }
      assert.equal(minted, false, "Error, minted when it should not.");
    });

    it("should return contract owner", async function() {
      const owner = await this.contract.getOwner.call();
      assert.equal(owner, account_one, "Invalid valid owner");
    });
  });
});
