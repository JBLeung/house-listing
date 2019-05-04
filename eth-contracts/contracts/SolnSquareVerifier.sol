pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract Verifier {
    function verifyTx(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
        ) external returns (bool r);
}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
import "./ERC721Mintable.sol";
contract SolnSquareVerifier is ERC721Mintable {

  constructor (address verifierAdr, string memory name, string memory symbol)
    public {
    verifierContract = Verifier(verifierAdr);
  }

  Verifier verifier;
  // TODO define a solutions struct that can hold an index & an address

  struct Solution {
    uint256 index;
    address solutionAdr;
  }

  // TODO define an array of the above struct
  Solution[] private solutions;

  // TODO define a mapping to store unique solutions submitted
  mapping(bytes32 => Solution) private uniqueSolutions;


  // TODO Create an event to emit when a solution is added
  event Solution(address, uint256);


  // TODO Create a function to add the solutions to the array and emit the event

  function addSolution (address to, uint256 tokenId) internal {
    solution.push(Solution(to, tokenId));
    Solution(to, tokenId);
  }

  // TODO Create a function to mint new NFT only after the solution has been verified
  //  - make sure the solution is unique (has not been used before)
  //  - make sure you handle metadata as well as tokenSuplly

  mint(address to, uint256 tokenId,
    uint[2] memory a,
    uint[2][2] memory b,
    uint[2] memory c,
    uint[2] memory input) {

    bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
    assert(uniqueSolution[key].solution != to, "solution used before");
    if (verifierContract.verify(a, b, c, input)) {
      uniqueSolution[key] = Solution(to, toke)
      addSolution(to, tokenId);
      mint(to, tokenId);
    }
  }

}

























