var ERC721Mintable = artifacts.require("ERC721Mintable");

contract("TestERC721Mintable", accounts => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  describe("match erc721 spec", function() {
    beforeEach(async function() {
      console.log("here1");
      this.contract = await ERC721Mintable.new("bob", "hob", {
        from: account_one
      });

      console.log("here2");
      // TODO: mint multiple tokens
    });

    it("should return total supply", async function() {});

    it("should get token balance", async function() {});

    // token uri should be complete i.e:
    // https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function() {});

    it("should transfer token from one owner to another", async function() {});
  });

  describe("have ownership properties", function() {
    beforeEach(async function() {
      console.log("here3");
      this.contract = await ERC721Mintable.new("bob", "hob", {
        from: account_one
      });
    });

    it("should fail when minting when address is not contract owner", async function() {});

    it("should return contract owner", async function() {});
  });
});
